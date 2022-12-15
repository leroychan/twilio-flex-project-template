(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(70439)}])},70439:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var i=n(85893),o=n(9008),c=n.n(o),r=n(11163),a=n(67063),l=n(67294),s=n(41635),d=n(65351),h=n(96334),u=n(55018),p=n(36562),x=n(50686),g=x.iK.div((0,x.iv)({paddingX:"space40",paddingTop:"space200",paddingBottom:"space60",width:"100%",minHeight:"100vh",justifyContent:"center",flexDirection:"column",backgroundColor:"colorBackground",alignItems:"center",alignContent:"center",horizontalAlign:"center"})),m=x.iK.div((0,x.iv)({bottom:40,opacity:.8,padding:"space20",backgroundColor:"#000000",zIndex:100})),f=x.iK.div((0,x.iv)({width:"100%",justifyContent:"center",alignContent:"center",testAlign:"center",position:"relative",top:0,left:0,backgroundColor:"colorBackgroundPrimary",minHeight:"100%"})),v=x.iK.div((0,x.iv)({})),j=x.iK.div((0,x.iv)({width:"100%",height:"70px",marginTop:"space80"})),y=x.iK.div((0,x.iv)({maxWidth:"500px",marginTop:"space40",minWidth:"300px",justifyContent:"center"}));function k(){var e=(0,r.useRouter)(),t=(0,l.useState)(""),n=t[0],o=t[1];return(0,i.jsx)(g,{children:(0,i.jsxs)(d.Flex,{hAlignContent:"center",vertical:!0,vAlignContent:"center",height:"100%",children:[(0,i.jsxs)(p.MediaObject,{as:"div",verticalAlign:"center",marginBottom:"space40",children:[(0,i.jsx)(p.MediaFigure,{as:"div",spacing:"space40",children:(0,i.jsx)("img",{src:"https://hosted-assets-2838-dev.twil.io/twilio.png",height:"40px"})}),(0,i.jsx)(p.MediaBody,{as:"div",children:(0,i.jsx)(s.Text,{as:"p",fontSize:"fontSize70",fontWeight:"fontWeightMedium",children:"Twilio Video Quickstart Lite"})})]}),(0,i.jsx)(y,{children:(0,i.jsxs)(h.Card,{children:[(0,i.jsx)(u.Heading,{as:"h4",variant:"heading40",children:"Welcome!"}),(0,i.jsxs)(s.Text,{as:"p",fontSize:"fontSize20",fontWeight:"fontWeightMedium",color:"colorText",children:["This quickstart application aims at getting you stood up rapidly with a React-powered web application, powered by"," ",(0,i.jsx)("a",{href:"https://www.twilio.com/docs/video/javascript",target:"_blank",rel:"noopener",children:"Twilio Video JS"}),"."]}),(0,i.jsxs)(d.Flex,{marginTop:"space40",vertical:!0,children:[(0,i.jsx)(p.Label,{htmlFor:"video_room_name",required:!0,children:"Video Room Name"}),(0,i.jsx)(p.Input,{"aria-describedby":"email_help_text",id:"video_room_name",name:"video_room_name",placeholder:"ex. 123456",type:"text",required:!0,onChange:function(e){return o(e.target.value)}}),(0,i.jsx)(p.HelpText,{id:"email_help_text",children:"To join a video room manually, please enter the room name."}),(0,i.jsx)(d.Flex,{marginTop:"space40",children:(0,i.jsx)(p.Button,{type:"submit",variant:"destructive",onClick:function(){console.log(n),n&&e.push("/?code=".concat(n))},style:{background:"#F22F46"},disabled:!n,children:"Next"})})]})]})})]})})}var C=n(47568),w=n(70655),b=n(34929),S=n(98445),T=n(63750),_=n(37106),B=n(80471);function z(e,t){e.forEach((function(e){var n;if(e.track&&(e=e.track),e.attach){var i=e.attach();i.style.width="100%",i.style.height="100%",null===(n=document.getElementById(t))||void 0===n||n.appendChild(i)}}))}var F=x.iK.div((0,x.iv)({paddingX:"space40",paddingTop:"space200",paddingBottom:"space60",width:"100%",minHeight:"100vh",justifyContent:"center",flexDirection:"column",backgroundColor:"colorBackground",alignItems:"center",alignContent:"center",horizontalAlign:"center"})),W=x.iK.div((0,x.iv)({maxWidth:"500px",marginTop:"space40"}));function M(){return(0,i.jsx)(F,{children:(0,i.jsxs)(d.Flex,{hAlignContent:"center",vertical:!0,vAlignContent:"center",height:"100%",children:[(0,i.jsxs)(p.MediaObject,{as:"div",verticalAlign:"center",marginBottom:"space40",children:[(0,i.jsx)(p.MediaFigure,{as:"div",spacing:"space40",children:(0,i.jsx)("img",{src:"https://hosted-assets-2838-dev.twil.io/twilio.png",height:"40px"})}),(0,i.jsx)(p.MediaBody,{as:"div",children:(0,i.jsx)(s.Text,{as:"p",fontSize:"fontSize70",fontWeight:"fontWeightMedium",children:"Post Video Room"})})]}),(0,i.jsx)(W,{children:(0,i.jsxs)(h.Card,{children:[(0,i.jsx)(u.Heading,{as:"h4",variant:"heading40",children:"You video call has completed."}),(0,i.jsx)(s.Text,{as:"p",fontSize:"fontSize20",fontWeight:"fontWeightMedium",color:"colorText",children:"This view can be used to collect post video call CSAT or other data capture."})]})})]})})}var A=n(83454).env.SERVERLESS_FUNCTIONS_DOMAIN;function E(){var e=function(e){console.log("Successfully joined a Room: ".concat(e));var t=e.localParticipant;console.log('Connected to the Room as LocalParticipant "'.concat(t.identity,'"')),e.localParticipant.on("trackEnabled",(function(e){console.log("enabled",e)})),e.localParticipant.on("trackDisabled",(function(e){console.log("disabled",e)}));var n="remote-media-div";!function(e,t){e.forEach((function(e){var n;e.track&&(e=e.track);var i=e.attach();i.style.maxWidth="100%",i.style.height="100%",null===(n=document.getElementById(t))||void 0===n||n.appendChild(i)}))}(Array.from(t.tracks.values()),"local-media-div"),e.participants.forEach((function(e){console.log("IncomingVideoComponent: ".concat(e.identity," is already in the room}")),z(Array.from(e.tracks.values()),n)})),e.on("participantConnected",(function(e){console.log("IncomingVideoComponent: ".concat(e.identity," joined the room}"))})),e.on("trackSubscribed",(function(e,t){console.log("IncomingVideoComponent: ".concat(t," added track: ").concat(e.kind)),z([e],n)})),e.on("trackUnsubscribed",(function(e,t){console.log("IncomingVideoComponent: ".concat(t," removed track: ").concat(e.kind)),function(e){e.forEach((function(e){e.track&&(e=e.track),e.detach&&e.detach().forEach((function(e){e.remove()}))}))}([e])})),e.on("participantDisconnected",(function(e){console.log("IncomingVideoComponent: ".concat(e.identity," left the room"))})),e.on("disconnected",(function(){console.log("IncomingVideoComponent: disconnected")}))},t=(0,r.useRouter)().query.code,n=(0,l.useState)(!1),o=n[0],c=n[1],a=(0,l.useState)(!1),h=a[0],u=a[1],x=(0,l.useState)(null),k=x[0],F=x[1],W=(0,l.useState)(null),E=W[0],V=W[1],R=(0,l.useState)(!0),I=R[0],P=R[1],D=(0,l.useState)(!0),N=D[0],H=D[1],O=(0,l.useState)(null),K=O[0],L=O[1],U=(0,l.useState)(null),q=U[0],X=U[1],Z=(0,l.useState)("Join Video Room"),J=Z[0],Q=Z[1],G=(0,l.useState)(!1),Y=G[0],$=G[1],ee=(0,l.useState)(!1),te=ee[0],ne=ee[1],ie=(0,l.useState)(""),oe=ie[0],ce=ie[1];function re(e){return ae.apply(this,arguments)}function ae(){return(ae=(0,C.Z)((function(e){return(0,w.__generator)(this,(function(t){switch(t.label){case 0:return q||!e.room?[3,2]:[4,de()];case 1:return t.sent(),[3,3];case 2:ne(!0),t.label=3;case 3:return[2]}}))}))).apply(this,arguments)}function le(e){return se.apply(this,arguments)}function se(){return se=(0,C.Z)((function(e){return(0,w.__generator)(this,(function(t){switch(t.label){case 0:return ce(""),[4,fetch("".concat(A,"/features/chat-to-video-escalation/client-get-sync-token?code=").concat(e)).then((function(e){return e.json()})).then((function(e){if(e.error)throw e.error;return new b.Qh(e.token)})).then((function(t){return t.document(e)})).then((function(e){console.log("Code Validated. Sync document SID:",e.sid),re(e.data),e.on("updated",(function(e){console.log('Received an "updated" Sync Document event: ',e),$(!0),Q("Join Video Room"),re(e.data)}))})).catch((function(e){console.error("Unexpected error",e),ce(e),c(!1)}))];case 1:return t.sent(),[2]}}))})),se.apply(this,arguments)}function de(){return he.apply(this,arguments)}function he(){return(he=(0,C.Z)((function(){return(0,w.__generator)(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(A,"/features/chat-to-video-escalation/client-get-video-token?code=").concat(t)).then((function(e){return e.json()})).then((function(e){if(e.error)throw e.error;return console.log(e),S.connect(e.token)})).then((function(t){return c(!1),Q("Connected!"),X(t),Array.from(t.localParticipant.tracks.values()).forEach((function(e){"audio"===e.kind?(F(e.track),P(e.track.isEnabled)):(V(e.track),H(e.track.isEnabled))})),e(t),t}),(function(e){console.error("Unable to connect to Room: ".concat(e.message)),alert("Unable to connect to Room: ".concat(e.message))})).catch((function(e){console.error("Unexpected error",e),alert("Unexpected error: ".concat(e))}))];case 1:return n.sent(),[2]}}))}))).apply(this,arguments)}function ue(){return pe.apply(this,arguments)}function pe(){return(pe=(0,C.Z)((function(){return(0,w.__generator)(this,(function(e){switch(e.label){case 0:return c(!0),[4,le(t)];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}return(0,i.jsx)(i.Fragment,{children:q?(0,i.jsxs)(d.Flex,{vertical:!0,width:"100%",hAlignContent:"center",children:[(0,i.jsxs)(p.MediaObject,{as:"div",verticalAlign:"center",marginBottom:"space60",marginTop:"space60",children:[(0,i.jsx)(p.MediaFigure,{as:"div",spacing:"space40",children:(0,i.jsx)("img",{src:"https://hosted-assets-2838-dev.twil.io/twilio.png",height:"40px"})}),(0,i.jsx)(p.MediaBody,{as:"div",children:(0,i.jsxs)(s.Text,{as:"p",fontSize:"fontSize70",fontWeight:"fontWeightMedium",children:["Video Room - ",t]})})]}),(0,i.jsxs)(p.Grid,{padding:"space10",gutter:["space20","space60","space90"],vertical:[!0,!0,!1],children:[(0,i.jsx)(p.Column,{width:"100%",height:"auto",children:(0,i.jsxs)(v,{children:[(0,i.jsx)(f,{id:"remote-media-div"}),(0,i.jsx)(m,{children:(0,i.jsx)(s.Text,{as:"p",fontWeight:"fontWeightMedium",color:"colorTextBrandHighlight",children:"Remote Participant"})})]})}),(0,i.jsx)(p.Column,{width:"100%",children:(0,i.jsxs)(v,{children:[(0,i.jsx)(f,{id:"local-media-div"}),(0,i.jsx)(m,{children:(0,i.jsx)(s.Text,{as:"p",fontWeight:"fontWeightMedium",color:"colorTextBrandHighlight",children:"Local Participant (you)"})})]})})]}),(0,i.jsx)(j,{children:(0,i.jsx)(d.Flex,{width:"100%",hAlignContent:"center",vAlignContent:"center",children:(0,i.jsxs)(p.Stack,{orientation:"horizontal",spacing:"space50",children:[(0,i.jsx)(d.Flex,{children:I?(0,i.jsx)("div",{children:(0,i.jsx)(p.Tooltip,{text:"Mute",placement:"bottom",children:(0,i.jsx)(p.Button,{variant:"secondary",size:"circle",onClick:function(){console.log("mute clicked"),k&&(k.disable(),P(!1))},children:(0,i.jsx)(T.OnQ,{style:{width:"25px",height:"25px"}})})})}):(0,i.jsx)("div",{children:(0,i.jsx)(p.Tooltip,{text:"Unmute",placement:"bottom",children:(0,i.jsx)(p.Button,{variant:"primary",size:"circle",onClick:function(){console.log("unmute clicked"),null===k||void 0===k||k.enable(),P(!0)},children:(0,i.jsx)(T.C4C,{style:{width:"25px",height:"25px"}})})})})}),(0,i.jsx)(d.Flex,{children:N?(0,i.jsx)("div",{children:(0,i.jsx)(p.Tooltip,{text:"Stop Camera",placement:"bottom",children:(0,i.jsx)(p.Button,{variant:"secondary",size:"circle",onClick:function(){E&&(null===E||void 0===E||E.disable(),H(!1))},children:(0,i.jsx)(T.LsT,{style:{width:"25px",height:"25px"}})})})}):(0,i.jsx)("div",{children:(0,i.jsx)(p.Tooltip,{text:"Start Camera",placement:"bottom",children:(0,i.jsx)(p.Button,{variant:"primary",size:"circle",onClick:function(){E&&(E.enable(),H(!0))},children:(0,i.jsx)(T.kwV,{style:{width:"25px",height:"25px"}})})})})}),(0,i.jsx)(d.Flex,{children:(0,i.jsx)("div",{children:(0,i.jsx)(p.Tooltip,{text:K?"Stop Sharing Screen":"Share Screen",placement:"bottom",children:(0,i.jsx)(p.Button,{variant:K?"primary":"secondary",size:"circle",onClick:function(){K?(null===q||void 0===q||q.localParticipant.unpublishTrack(K),K.stop(),L(null)):navigator.mediaDevices.getDisplayMedia().then((function(e){var t=new S.LocalVideoTrack(e.getTracks()[0]);null===q||void 0===q||q.localParticipant.publishTrack(t),L(t)})).catch((function(){alert("Could not share the screen.")}))},children:K?(0,i.jsx)(_.tIC,{style:{width:"25px",height:"25px"}}):(0,i.jsx)(_.BfX,{style:{width:"25px",height:"25px"}})})})})}),(0,i.jsx)(d.Flex,{children:(0,i.jsx)("div",{children:(0,i.jsx)(p.Tooltip,{text:"Disconnect",placement:"bottom",children:(0,i.jsx)(p.Button,{variant:"primary",size:"circle",onClick:function(){q&&(q.disconnect(),X(null),u(!0))},children:(0,i.jsx)(B.Fk5,{style:{width:"25px",height:"25px"}})})})})})]})})})]}):(0,i.jsx)(i.Fragment,{children:h?(0,i.jsx)(M,{}):(0,i.jsx)(g,{children:(0,i.jsxs)(d.Flex,{hAlignContent:"center",vertical:!0,vAlignContent:"center",height:"100%",children:[(0,i.jsxs)(p.MediaObject,{as:"div",verticalAlign:"center",marginBottom:"space40",children:[(0,i.jsx)(p.MediaFigure,{as:"div",spacing:"space40",children:(0,i.jsx)("img",{src:"https://hosted-assets-2838-dev.twil.io/twilio.png",height:"40px"})}),(0,i.jsx)(p.MediaBody,{as:"div",children:(0,i.jsxs)(s.Text,{as:"p",fontSize:"fontSize70",fontWeight:"fontWeightMedium",children:["Video Room - ",t]})})]}),(0,i.jsx)(y,{children:(0,i.jsx)(p.Card,{padding:"space100",children:(0,i.jsxs)(d.Flex,{vertical:!0,hAlignContent:"center",children:[te&&(0,i.jsx)(d.Flex,{marginBottom:"space60",children:(0,i.jsx)(s.Text,{as:"p",fontSize:"fontSize60",fontWeight:"fontWeightMedium",color:"colorText",children:Y?"Agent connected.":"Waiting for agent to join..."})}),oe&&(0,i.jsx)(d.Flex,{marginBottom:"space60",children:(0,i.jsxs)(s.Text,{as:"p",fontSize:"fontSize60",fontWeight:"fontWeightMedium",color:"colorTextError",children:["Error: ",oe]})}),(0,i.jsx)(p.Button,{variant:"destructive",onClick:(0,C.Z)((function(){return(0,w.__generator)(this,(function(e){switch(e.label){case 0:return[4,ue()];case 1:return[2,e.sent()]}}))})),loading:o,style:{background:"#F22F46"},children:J}),(0,i.jsx)("span",{style:{color:"#000000",lineHeight:1,fontSize:"12px",letterSpacing:"wider",marginTop:"15px",textAlign:"center"},children:"Click to join the video room!"})]})})})]})})})})}var V=function(){var e=(0,r.useRouter)().query.code;return console.log("code",e),(0,i.jsxs)(a.Box,{as:"main",children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"Twilio Video Lite"}),(0,i.jsx)("link",{rel:"icon",href:"https://hosted-assets-2838-dev.twil.io/twilio.png"})]}),e?(0,i.jsx)(E,{}):(0,i.jsx)(k,{})]})}}},function(e){e.O(0,[816,907,955,13,964,422,647,774,888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);