(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,i){e.exports=i.p+"static/media/project1.e2797982.png"},function(e,t,i){e.exports=i.p+"static/media/project2.c49a7d3d.png"},function(e,t,i){e.exports=i.p+"static/media/project3.fd46269a.png"},function(e,t,i){e.exports=i.p+"static/media/project4.1a6c4c21.png"},function(e,t,i){e.exports=i.p+"static/media/project5.e65624e9.png"},function(e,t,i){e.exports=i.p+"static/media/project6.e815832f.png"},function(e,t,i){e.exports=i.p+"static/media/project7.ba7d598c.png"},function(e,t,i){e.exports=i.p+"static/media/email_icon.fd99f8e3.png"},function(e,t,i){e.exports=i.p+"static/media/github_icon.e2a62886.png"},function(e,t,i){e.exports=i.p+"static/media/hackerearth-icon.6d33c78f.png"},function(e,t,i){e.exports=i.p+"static/media/linkedin_icon.56ab00e8.png"},function(e,t,i){e.exports=i.p+"static/media/IMG-20170827-WA0008.817ed7b5.jpg"},function(e,t,i){e.exports=i(29)},,,,,,,function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(6),o=i.n(r),c=i(1),l=i(2),p=i(4),s=i(3),m=i(8),u=i.n(m),d=i(9),h=i.n(d),g=i(10),f=i.n(g),b=i(11),j=i.n(b),k=i(12),y=i.n(k),E=i(13),w=i.n(E),v=i(14),A=i.n(v),O=[{id:1,title:"My Portfolio",description:"A django App that I built,involving  sqllite,bootstrap and python concepts!",link:"https://arjit123.pythonanywhere.com/",image:u.a},{id:2,title:"Todowo",description:"This App track the status of tasks.",link:"https://github.com/1Arjit007/Django3_ImportantworkApp",image:h.a},{id:3,title:"Weather App",description:"Tells about  weather  of each city in the world ",link:"https://github.com/1Arjit007/Weather-App",image:f.a},{id:4,title:"Password_generator",description:"Generate random password",link:"https://github.com/1Arjit007/Django3-Password_generator",image:j.a},{id:5,title:"Todo-App-using-kotlin",description:"This Android App track the status of tasks.And implementation of Recycler View and Shared Preferences",link:"https://github.com/1Arjit007/Todo-App-using-kotlin",image:y.a},{id:6,title:"Emoji-Dictionary",description:"Implementation of Recycler View",link:"https://github.com/1Arjit007/Emoji-Dictionary",image:w.a},{id:7,title:"TipCalc",description:"A Android App that I built",link:"https://github.com/1Arjit007/TipCalc",image:A.a}],x=function(e){Object(p.a)(i,e);var t=Object(s.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){console.log("this.props",this.props);var e=this.props.project,t=e.title,i=e.image,n=e.description,r=e.link;return a.a.createElement("div",{style:{display:"inline-block",width:300,margin:50}},a.a.createElement("h3",null,t),a.a.createElement("img",{src:i,alt:"profile",style:{width:200,height:120},className:"img-responsive"}),a.a.createElement("p",null,n),a.a.createElement("a",{href:r},"Click Here"))}}]),i}(n.Component),C=function(e){Object(p.a)(i,e);var t=Object(s.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Highlighted Projects"),a.a.createElement("div",null,O.map((function(e){return a.a.createElement(x,{key:e.id,project:e})}))))}}]),i}(n.Component),I=i(15),B=i.n(I),P=i(16),T=i.n(P),D=i(17),N=i.n(D),_=i(18),M=i.n(_),S=[{id:1,link:"mailto:2arjit.kesarwani@gmail.com",image:B.a},{id:2,link:"https://github.com/1Arjit007",image:T.a},{id:1,link:"https://www.hackerearth.com/@arjit37",image:N.a},{id:1,link:"https://www.linkedin.com/in/arjit-kesarwani-508a151a9/",image:M.a}],H=function(e){Object(p.a)(i,e);var t=Object(s.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.socialProfile,t=e.link,i=e.image;return a.a.createElement("div",{style:{display:"inline-block",width:100,margin:10}},a.a.createElement("a",{href:t},a.a.createElement("img",{src:i,alt:"Social-Profile",style:{width:30,height:30}})))}}]),i}(n.Component),R=function(e){Object(p.a)(i,e);var t=Object(s.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Connect with me!"),a.a.createElement("div",null,S.map((function(e){return a.a.createElement(H,{key:e.id,socialProfile:e})}))))}}]),i}(n.Component),W=i(19),G=i.n(W),J=(i(24),function(e){Object(p.a)(i,e);var t=Object(s.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={displayBio:!1},e.toggleDisplayBio=function(){e.setState({displayBio:!e.state.displayBio})},e}return Object(l.a)(i,[{key:"render",value:function(){return a.a.createElement("div",{className:"text-center bg-info"},a.a.createElement("img",{src:G.a,alt:"profile",className:"profile"}),a.a.createElement("h1",null,"Hello"),a.a.createElement("p",null,"My name is Arjit."),a.a.createElement("p",null,"I'm always looking forward to working on meaningful project"),this.state.displayBio?a.a.createElement("div",null,a.a.createElement("p",null,"I live in Allahabad,and I code every day."),a.a.createElement("p",null,"My favorite language is python."),a.a.createElement("p",null,"Beside coding,I like photography."),a.a.createElement("button",{onClick:this.toggleDisplayBio,className:"btn btn-success"},"Show less")):a.a.createElement("div",null,a.a.createElement("button",{onClick:this.toggleDisplayBio,className:"btn btn-primary"},"Read more")),a.a.createElement("section",{className:"bg-dark text-white"},a.a.createElement(C,null)),a.a.createElement("section",{className:"bg-info text-white"},a.a.createElement(R,null)))}}]),i}(n.Component));i(27),i(28);o.a.render(a.a.createElement(J,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f92effdb.chunk.js.map