"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[780],{4780:function(s,e,t){t.r(e),t.d(e,{default:function(){return U}});var n=t(5671),r=t(3144),i=t(136),o=t(2882),u=t(1413),l=t(2791),a=t(8687),c="MyPosts_postsBlock__lB-pf",d="MyPosts_posts__GSiZ2",h="Post_item__Yu4oG",f=t(184),p=function(s){return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("img",{src:"https://tse3.mm.bing.net/th?id=OIP.dQqhbTIZRbyncab04A69JAHaFj&pid=Api&P=0&w=234&h=175"}),s.message,";"]}),(0,f.jsx)("div",{children:(0,f.jsxs)("span",{children:["like",s.likeQuantity]})})]})},j=t(6139),x=t(704),v=t(5304),m=t(2781),b=(0,v.D)(10),g=(0,x.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,f.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)(j.Z,{component:m.gx,name:"newPostBody",validate:[v.C,b]})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{children:"Add post"})})]})})),P=l.render=function(s){console.log("render yo");var e=s.posts.map((function(s){return(0,f.jsx)(p,{message:s.message,likesCount:s.likesCount})}));return(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("h3",{children:"My Posts"}),(0,f.jsx)("div",{children:(0,f.jsx)("div",{children:(0,f.jsx)(g,{onSubmit:function(e){s.addPost(e.newPostBody)}})})}),(0,f.jsx)("div",{className:d,children:e})]})},k=t(6070),y=(0,a.$j)((function(s){return{posts:s.profileReducer.posts,newPostText:s.profileReducer.newPostText}}),(function(s){return{addPost:function(e){s((0,k.Wl)(e))}}}))(P),Z=t(885),S=t(6740),_="ProfileInfo_descriptionBlock__XBXuJ",A="ProfileInfo_mainPhoto__QU8TO",I="ProfileInfo_contact__sQB8W",w=function(s){var e=(0,l.useState)(!1),t=(0,Z.Z)(e,2),n=t[0],r=t[1],i=(0,l.useState)(s.status),o=(0,Z.Z)(i,2),u=o[0],a=o[1];(0,l.useEffect)((function(){a(s.status)}),[s.status]);return(0,f.jsxs)("div",{children:[!n&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Status: "}),(0,f.jsx)("span",{onDoubleClick:function(){r(!0)},children:s.status})]}),n&&(0,f.jsx)("div",{children:(0,f.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(u)},onChange:function(s){a(s.currentTarget.value)},value:u})})]})},C=t(4353),F=t(9234),N=(0,x.Z)({form:"edit-profile"})((function(s){return(0,f.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,f.jsx)("div",{children:(0,f.jsx)("button",{children:"save"})}),s.error&&(0,f.jsx)("div",{className:F.Z.formSummaryError,children:s.error}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full name"}),": ",(0,m.Gr)("Full name","fullName",[],m.II)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Looking for a job"}),": ",(0,m.Gr)("","lookingForAJob",[],m.II,{type:"checkbox"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My professional skills"}),": ",(0,m.Gr)("My professional skills","lookingForAJobDescription",[],m.gx)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me"}),":",(0,m.Gr)("About me","aboutMe",[],m.gx)]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts"}),":",Object.keys(s.profile.contacts).map((function(s){return(0,f.jsx)("div",{className:I,children:(0,f.jsxs)("b",{children:[s,": ",(0,m.Gr)(s,"contacts."+s,[],m.II)]})},s)}))]})]})})),O=function(s){var e=s.profile,t=s.isOwner,n=s.goToEditMode;return(0,f.jsxs)("div",{children:[t&&(0,f.jsx)("div",{children:(0,f.jsx)("button",{onClick:n,children:"edit"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Full name"}),":",e.fullName]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"My professional skills"}),":",e.lookingForAJobDescription]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"About me"}),":",e.aboutMe]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"Contacts"}),":",Object.keys(e.contacts).map((function(s){return(0,f.jsx)(M,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},M=function(s){var e=s.contactTitle,t=s.contactValue;return(0,f.jsxs)("div",{className:I,children:[(0,f.jsx)("b",{children:e}),": ",t]})},T=function(s){var e=(0,l.useState)(!1),t=(0,Z.Z)(e,2),n=t[0],r=t[1];if(!s.profile)return(0,f.jsx)(S.Z,{});return(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:_,children:[(0,f.jsx)("img",{className:A,src:s.profile.photos.large||C}),s.isOwner&&(0,f.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&s.savePhoto(e.target.files[0])}}),n?(0,f.jsx)(N,{initialValues:s.profile,profile:s.profile,onSubmit:function(e){s.saveProfile(e).then((function(){return r(!1)}))}}):(0,f.jsx)(O,{goToEditMode:function(){r(!0)},profile:s.profile,isOwner:s.isOwner}),(0,f.jsx)(w,{status:s.status,updateStatus:s.updateStatus})]})})},B=function(s){return(0,f.jsxs)("div",{children:[(0,f.jsx)(T,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,updateStatus:s.updateStatus,saveProfile:s.saveProfile}),(0,f.jsx)(y,{})]})},J=t(6871),G=(t(1548),t(7781));var R=function(s){(0,i.Z)(t,s);var e=(0,o.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.router.params.userId;!s&&this.props.isAuth&&(s=this.props.authorisedUserId),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"render",value:function(){return(0,f.jsx)("div",{children:(0,f.jsx)(B,(0,u.Z)((0,u.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),t}(l.Component),U=(0,G.qC)((0,a.$j)((function(s){return{profile:s.profileReducer.profile,status:s.profileReducer.status,authorisedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:k.et,getStatus:k.lR,updateStatus:k.Nf,savePhoto:k.Ju,saveProfile:k.Ii}),(function(s){return function(e){var t=(0,J.TH)(),n=(0,J.s0)(),r=(0,J.UO)();return(0,f.jsx)(s,(0,u.Z)((0,u.Z)({},e),{},{router:{location:t,navigate:n,params:r}}))}}))(R)},1548:function(s,e,t){t.d(e,{F:function(){return f}});var n=t(1413),r=t(5671),i=t(3144),o=t(136),u=t(2882),l=t(2791),a=t(8687),c=t(6871),d=t(184),h=function(s){return{isAuth:s.auth.isAuth}},f=function(s){var e=function(e){(0,o.Z)(l,e);var t=(0,u.Z)(l);function l(){return(0,r.Z)(this,l),t.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(s,(0,n.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,a.$j)(h)(e)}}}]);
//# sourceMappingURL=780.24d7e5d6.chunk.js.map