(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,a,t){e.exports=t(289)},181:function(e,a,t){},182:function(e,a,t){},289:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(25),o=t.n(i),l=(t(181),t(182),t(2)),c=t(6),m=t.n(c),s=window.innerHeight>700?window.innerHeight:700,g={content:{maxHeight:.1*s,marginBottom:.05*s,backgroundColor:"#45aaf2",padding:"15px",paddingLeft:"10%"}},d=m()(g)(function(e){var a=e.classes;return r.a.createElement(l.a,{className:a.content,position:"sticky"},r.a.createElement(l.g,{variant:"headline",component:"h1",color:"inherit"},"Bookaholic"))}),u=t(15),p=t(35),h=t(49),E=t.n(h),f=.8*window.innerHeight,v=m()(function(e){return{root:{marginTop:"30px",textAlign:"center",width:"90%",marginLeft:"auto",marginRight:"auto",maxHeight:f,height:f,color:"white"},img:{maxWidth:"100%"},paper:{padding:"40px",textAlign:"left"}}})(function(e){var a=e.classes,t=Object(n.useState)("signin"),i=Object(p.a)(t,2),o=i[0],c=i[1],m=Object(n.useState)({nickname:"",firstname:"",lastname:"",exp:"",about:"",password:""}),s=Object(p.a)(m,2),g=s[0],d=s[1],h=Object(n.useState)({nickname:"",password:""}),f=Object(p.a)(h,2),v=f[0],w=f[1],b=function(e){switch(e.target.name){case"nickname":d(Object(u.a)({},g,{nickname:e.target.value}));break;case"firstname":d(Object(u.a)({},g,{firstname:e.target.value}));break;case"lastname":d(Object(u.a)({},g,{lastname:e.target.value}));break;case"exp":d(Object(u.a)({},g,{exp:e.target.value}));break;case"about":d(Object(u.a)({},g,{about:e.target.value}));break;case"password":d(Object(u.a)({},g,{pasword:e.target.value}))}},k=function(e){switch(e.target.name){case"nickname":w(Object(u.a)({},v,{nickname:e.target.value}));break;case"password":w(Object(u.a)({},v,{password:e.target.value}))}},x=function(e){e.preventDefault(),"signin"==e.target.name?c("register"):c("signin")};return r.a.createElement("div",null,r.a.createElement(l.c,{container:!0,className:a.root},r.a.createElement(l.c,{item:!0,md:12},r.a.createElement(l.g,{variant:"display2",color:"inherit",align:"center",gutterBottom:!0},"Bookaholic"),r.a.createElement(l.c,{container:!0,spacing:40},r.a.createElement(l.c,{item:!0,md:7,xs:12},r.a.createElement(l.g,{color:"inherit",variant:"headline",gutterBottom:!0},"Share your books - share your knowledge"),r.a.createElement(l.f,null,r.a.createElement("img",{src:"/book/images/group.jpg",className:a.img}))),r.a.createElement(l.c,{item:!0,md:5,xs:12},"signin"==o&&r.a.createElement(E.a,{transitionName:"rotate",transitionEnterTimeout:5e3,transitionLeaveTimeout:5e3,transitionAppear:!0,transitionAppearTimeout:5e3},r.a.createElement(l.f,{className:a.paper},r.a.createElement(l.g,{variant:"headline",gutterBottom:!0,align:"center",color:"secondary"},"Register"),r.a.createElement(l.e,{variant:"filled"},"Nickname ( remember it you will need it to log in )"),r.a.createElement(l.d,{name:"nickname",onChange:b,fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.e,{variant:"filled"},"First name"),r.a.createElement(l.d,{name:"firstname",onChange:b,fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.e,{variant:"filled"},"Last name"),r.a.createElement(l.d,{name:"lastname",onChange:b,fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.e,{variant:"filled"},"Reading experience ( in years )"),r.a.createElement(l.d,{name:"exp",onChange:b,fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.e,{variant:"filled"},"Short about you"),r.a.createElement(l.d,{name:"about",onChange:b,fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.e,{variant:"filled"},"Password"),r.a.createElement(l.d,{type:"password",name:"password",onChange:b,fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.b,{onClick:function(){console.log(g)},variant:"extended",color:"secondary"},"Register"),r.a.createElement(l.g,{color:"primary",inline:!0}," Have an account already?"),r.a.createElement("a",{href:"#",onClick:x,name:"signin"}," Sign in"))),"register"==o&&r.a.createElement(E.a,{transitionName:"rotate",transitionEnterTimeout:5e3,transitionLeaveTimeout:5e3,transitionAppear:!0,transitionAppearTimeout:5e3},r.a.createElement(l.f,{className:a.paper},r.a.createElement(l.g,{variant:"headline",gutterBottom:!0,align:"center",color:"secondary"},"Sign in"),r.a.createElement(l.e,{variant:"filled"},"Nickname ( remember it you will need it to log in )"),r.a.createElement(l.d,{onChange:k,name:"nickname",fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.e,{variant:"filled"},"Password"),r.a.createElement(l.d,{onChange:k,name:"password",type:"password",fullWidth:!0,style:{marginBottom:"20px"}}),r.a.createElement(l.b,{variant:"extended",color:"secondary",onClick:function(){console.log(v)}},"Sign in"),r.a.createElement(l.g,{color:"primary",inline:!0}," Don't have an account? "),r.a.createElement("a",{href:"",onClick:x,name:"register"},"Register"))))))))}),w=function(){return r.a.createElement("div",null,r.a.createElement(v,null))},b=t(79),k=t(23),x=m()({main:{padding:"0 15px"}})(function(e){var a=e.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{className:a.main},r.a.createElement(b.a,{basename:"/book"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/",component:w,exact:!0})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,1,2]]]);
//# sourceMappingURL=main.4a7df97c.chunk.js.map