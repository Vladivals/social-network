"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[657],{4657:function(s,e,n){n.r(e),n.d(e,{default:function(){return x}});var i=n(2807),a=(n(2791),{dialogs:"Dialogs_dialogs__oe96H",dialogsItems:"Dialogs_dialogsItems__zeEWD",active:"Dialogs_active__t8cjl",messages:"Dialogs_messages__Cg2l+",message:"Dialogs_message__ZEWo0"}),t=n(3504),r=n(184),o=function(s){var e="/dialogs/"+s.id;return(0,r.jsx)("div",{className:a.dialog+" "+a.active,children:(0,r.jsx)(t.OL,{to:e,children:s.name})})},u=function(s){return(0,r.jsx)("div",{className:a.dialog,children:s.message})},d=n(6139),l=n(704),c=n(5304),g=n(2781),m=(0,c.D)(5),h=(0,l.Z)({form:"dialogAddMessageForm"})((function(s){return(0,r.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)(d.Z,{component:g.gx,validate:[c.C,m],placeholder:"Enter your message",name:"newMessageBody"})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{children:"Send"})})]})})),f=function(s){var e=s.dialogsPage,n=e.dialogs.map((function(s){return(0,r.jsx)(o,{name:s.name,id:s.id})})),i=e.messages.map((function(s){return(0,r.jsx)(u,{message:s.message})}));return(0,r.jsxs)("div",{className:a.dialogs,children:[(0,r.jsx)("div",{className:a.dialogsItems,children:n}),(0,r.jsxs)("div",{className:a.messages,children:[(0,r.jsx)("div",{children:i}),(0,r.jsx)("div",{})]}),(0,r.jsx)(h,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})},j=n(8687),v=n(1548),x=(0,n(7781).qC)((0,j.$j)((function(s){return{dialogsPage:s.dialogsReducer,isAuth:s.auth.isAuth}}),(function(s){return{sendMessage:function(e){s((0,i.X)(e))}}})),v.F)(f)},1548:function(s,e,n){n.d(e,{F:function(){return m}});var i=n(1413),a=n(5671),t=n(3144),r=n(136),o=n(2882),u=n(2791),d=n(8687),l=n(6871),c=n(184),g=function(s){return{isAuth:s.auth.isAuth}},m=function(s){var e=function(e){(0,r.Z)(u,e);var n=(0,o.Z)(u);function u(){return(0,a.Z)(this,u),n.apply(this,arguments)}return(0,t.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(s,(0,i.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,d.$j)(g)(e)}}}]);
//# sourceMappingURL=657.df3f42a1.chunk.js.map