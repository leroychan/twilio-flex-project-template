import * as Flex from "@twilio/flex-ui";
import FlexState from "../../helpers/flexHelper";
import { delayActivityChange } from "../..";
import { NotificationIds } from "../notifications/ActivityReservationHandler";
import { systemActivities } from "../../helpers/systemActivities";
import { isFeatureEnabled } from '../..';

export function beforeSetActivity(flex: typeof Flex, manager: Flex.Manager) {
  if (!isFeatureEnabled()) return;

  flex.Actions.addListener("beforeSetActivity", (payload, abortFunction) => {
    const { activityName, activitySid, isInvokedByPlugin } = payload;

    if (isInvokedByPlugin) {
      // We will allow any worker activity change invoked by the plugin to
      // proceed as normal
      return;
    }

    if (
      systemActivities
        .map((a) => a.toLowerCase())
        .includes(activityName.toLowerCase())
    ) {
      abortFunction();
      flex.Notifications.showNotification(
        NotificationIds.RestrictedActivities,
        {
          activityName,
        }
      );
    } else if (FlexState.hasActiveCallTask || FlexState.hasWrappingTask) {
      abortFunction();
      const targetActivity = FlexState.getActivityBySid(activitySid);
      delayActivityChange(targetActivity);
    }
  });
}
