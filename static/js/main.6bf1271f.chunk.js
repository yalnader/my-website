(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{1029:function(e,t,a){},1030:function(e,t,a){},1031:function(e,t,a){},1033:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(8),l=a.n(r),c=(a(35),a(3)),s=a(4),i=a(6),h=a(5),u=a(2),d=a(7),m=(a(36),a(37),a(9)),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={color:"#FFFFFF",isHover:!1,size:"4em",shadow:"",shadowDrop:""},a.colorChange=a.colorChange.bind(Object(u.a)(a)),a.sizeChange=a.sizeChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"colorChange",value:function(){var e;this.state.isHover?(e="#FFFFFF",this.setState((function(t,a){return{color:e,isHover:!1,shadowDrop:"",shadow:""}}))):(e="#181717",this.setState((function(t,a){return{color:e,isHover:!0,shadowDrop:"drop-shadow(0 0  2px #181717)",shadow:"0 0 2px #181717"}})))}},{key:"sizeChange",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{onMouseEnter:this.colorChange,onMouseLeave:this.colorChange,onMouseOver:this.changeBack},n.a.createElement("a",{href:"https://github.com/yalnader",target:"_blank"},n.a.createElement("div",{style:{filter:this.state.shadowDrop}},n.a.createElement(m.Github,{size:this.state.size,color:this.state.color})),n.a.createElement("span",{style:{color:this.state.color,fontSize:"2em",fontWeight:"bolder",textShadow:this.state.shadow}},"Github")))}}]),t}(n.a.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={color:"#FFFFFF",isHover:!1,size:"4em",shadow:"",shadowDrop:""},a.colorChange=a.colorChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"colorChange",value:function(){var e;this.state.isHover?(e="#FFFFFF",this.setState((function(t,a){return{color:e,isHover:!1,shadowDrop:"",shadow:""}}))):(e="#0077B5",this.setState((function(t,a){return{color:e,isHover:!0,shadowDrop:"drop-shadow(0 0  2px #0077B5)",shadow:"0 0  2px #0077B5"}})))}},{key:"render",value:function(){return n.a.createElement("div",{onMouseEnter:this.colorChange,onMouseLeave:this.colorChange},n.a.createElement("a",{href:"https://www.linkedin.com/in/yalnader/",target:"_blank"},n.a.createElement("div",{style:{filter:this.state.shadowDrop}},n.a.createElement(m.Linkedin,{id:"linkedin",size:this.state.size,color:this.state.color})),n.a.createElement("span",{style:{color:this.state.color,fontSize:"2em",fontWeight:"bolder",textShadow:this.state.shadow}},"LinkedIn")))}}]),t}(n.a.Component),C=a(20),p=a.n(C),v=(n.a.Component,a(23)),E=a.n(v),k=a(24),w=a.n(k),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={color:"#FFFFFF",isHover:!1,size:"4em"},a.colorChange=a.colorChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"colorChange",value:function(){var e;this.state.isHover?(e="#FFFFFF",this.setState((function(t,a){return{color:e,isHover:!1,shadowDrop:"",shadow:""}}))):(e="#FDB1FF",e="#FFAC81",e="#2dbcad",e="#f27f3d",this.setState((function(t,a){return{color:e,isHover:!0,shadowDrop:"drop-shadow(0 0  2px #f27f3d)",shadow:"0 0  2px #f27f3d"}})))}},{key:"render",value:function(){return n.a.createElement("div",{onMouseEnter:this.colorChange,onMouseLeave:this.colorChange},n.a.createElement("a",{href:w.a,target:"_blank"},n.a.createElement("div",{style:{filter:this.state.shadowDrop}},n.a.createElement(E.a,{color:this.state.color,fontSize:this.state.size})),n.a.createElement("span",{style:{color:this.state.color,fontSize:"2em",fontWeight:"bolder",textShadow:this.state.shadow}},"Resume")))}}]),t}(n.a.Component),O=a(25),F=a(26),j=a.n(F),y=(a(17),a(12)),S=a.n(y),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleColor=function(){a.props.parentMethod(a.state.backColor)},a.state={work:!1,backColor:"App-footer"},a.githubColor=a.githubColor.bind(Object(u.a)(a)),a.linkedinColor=a.linkedinColor.bind(Object(u.a)(a)),a.workColor=a.workColor.bind(Object(u.a)(a)),a.resumeColor=a.resumeColor.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"githubColor",value:function(){console.log("github Color is wokring"),this.setState((function(e,t){return{backColor:"github"}})),console.log(this.state.backColor)}},{key:"linkedinColor",value:function(){console.log("linkedin Color is wokring"),this.setState((function(e,t){return{backColor:"linkedin"}})),console.log(this.state.backColor)}},{key:"resumeColor",value:function(){console.log("resume Color is wokring"),this.setState((function(e,t){return{backColor:"resume"}})),console.log(this.state.backColor)}},{key:"workColor",value:function(){console.log("work Color is wokring"),this.setState((function(e,t){return{backColor:"work"}})),console.log(this.state.backColor)}},{key:"render",value:function(){return n.a.createElement(O.Fade,{in:!0},n.a.createElement("div",{className:"topPart"},n.a.createElement("h1",null,"Hi there!"),n.a.createElement("p",null,"I'm ",n.a.createElement("span",{className:"name"},"Yasser Alnader"),", a second year Software Engineering student at the University of Ottawa"),n.a.createElement("p",null,"For the Winter 2020 term I'm a Data Visualization intern at ",n.a.createElement("span",{className:"name"},"Kinaxis")," "),n.a.createElement("p",null,"I also began my job search for a internship in ",n.a.createElement("span",{className:"name"}," Fall 2020")),n.a.createElement("p",null)),n.a.createElement("table",{onMouseOver:this.handleColor},n.a.createElement("thead",null),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"topRow"},n.a.createElement("td",{onMouseEnter:this.githubColor},n.a.createElement(b,null)),n.a.createElement("td",{onMouseEnter:this.resumeColor},n.a.createElement(g,null)),n.a.createElement("td",{onMouseEnter:this.linkedinColor},n.a.createElement(f,null)))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(S.a,{href:"#contactInfo"},n.a.createElement("div",{className:"table-foot"},n.a.createElement("div",{className:"contact-title"},"Contact"),n.a.createElement("div",{id:"downArrow"},n.a.createElement(j.a,{fontSize:"3em",color:"#f27f3d",id:"downArrow"})))))))))}}]),t}(n.a.Component),D=(a(1029),a(1030),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"bar"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(b,null))))}}]),t}(n.a.Component)),H=(n.a.Component,a(1031),function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"contactInfo"},n.a.createElement("div",{className:"title"},"Feel free to contact me",n.a.createElement("div",{className:"contact"},n.a.createElement("a",{href:"mailto:yasseralnlader@gmail.com",id:"email"},"yasseralnader@gmail.com"))))}}]),t}(n.a.Component)),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={backColor:"App-footer",backFooter:"App"},a.handleWork=a.handleWork.bind(Object(u.a)(a)),a.handleColor=a.handleColor.bind(Object(u.a)(a)),console.log(a.state.backColor),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleWork",value:function(){this.setState({work:!0}),console.log("The state has been set to true")}},{key:"handleColor",value:function(e){this.setState((function(t,a){return{backColor:e,backFooter:e}}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement(z,{parentMethod:this.handleColor})),n.a.createElement("div",{className:this.state.backColor},n.a.createElement(H,null))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,a){e.exports=a.p+"static/media/yasser.4a414903.pdf"},30:function(e,t,a){e.exports=a(1033)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){}},[[30,1,2]]]);
//# sourceMappingURL=main.6bf1271f.chunk.js.map