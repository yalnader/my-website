(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{1019:function(e,t,n){},1020:function(e,t,n){},1022:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),o=n.n(l),c=(n(29),n(3)),i=n(4),s=n(6),u=n(5),h=n(2),b=n(7),m=(n(30),n(31),n(9)),E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={color:"#cd5c5c",isHover:!1,size:84},n.colorChange=n.colorChange.bind(Object(h.a)(n)),n.sizeChange=n.sizeChange.bind(Object(h.a)(n)),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"colorChange",value:function(){var e;this.state.isHover?(e="#cd5c5c",this.setState((function(t,n){return{color:e,isHover:!1}}))):(e="#181717",this.setState((function(t,n){return{color:e,isHover:!0}})))}},{key:"sizeChange",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{onMouseEnter:this.colorChange,onMouseLeave:this.colorChange,onMouseOver:this.changeBack},r.a.createElement("a",{href:"https://github.com/yalnader",target:"_blank"},r.a.createElement("div",null,r.a.createElement(m.Github,{size:this.state.size,color:this.state.color})),r.a.createElement("span",{style:{color:this.state.color}},"Github")))}}]),t}(r.a.Component),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={color:"#cd5c5c",isHover:!1,size:84},n.colorChange=n.colorChange.bind(Object(h.a)(n)),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"colorChange",value:function(){var e;this.state.isHover?(e="#cd5c5c",this.setState((function(t,n){return{color:e,isHover:!1}}))):(e="#0077B5",this.setState((function(t,n){return{color:e,isHover:!0}})))}},{key:"render",value:function(){return r.a.createElement("div",{onMouseEnter:this.colorChange,onMouseLeave:this.colorChange},r.a.createElement("a",{href:"https://www.linkedin.com/in/yalnader/",target:"_blank"},r.a.createElement("div",null,r.a.createElement(m.Linkedin,{id:"linkedin",size:this.state.size,color:this.state.color})),r.a.createElement("span",{style:{color:this.state.color}},"LinkedIn")))}}]),t}(r.a.Component),C=n(16),k=n.n(C),v=(r.a.Component,n(19)),f=n.n(v),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={color:"#cd5c5c",isHover:!1,size:84},n.colorChange=n.colorChange.bind(Object(h.a)(n)),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"colorChange",value:function(){var e;this.state.isHover?(e="#cd5c5c",this.setState((function(t,n){return{color:e,isHover:!1}}))):(e="#BA2EC7",this.setState((function(t,n){return{color:e,isHover:!0}})))}},{key:"render",value:function(){return r.a.createElement("div",{onMouseEnter:this.colorChange,onMouseLeave:this.colorChange},r.a.createElement("a",{href:"#",target:"_blank"},r.a.createElement("div",null,r.a.createElement(f.a,{color:this.state.color,fontSize:this.state.size})),r.a.createElement("span",{style:{color:this.state.color}},"Resume")))}}]),t}(r.a.Component),O=n(20),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleColor=function(){n.props.parentMethod(n.state.backColor)},n.state={work:!1,backColor:"App"},n.githubColor=n.githubColor.bind(Object(h.a)(n)),n.linkedinColor=n.linkedinColor.bind(Object(h.a)(n)),n.workColor=n.workColor.bind(Object(h.a)(n)),n.resumeColor=n.resumeColor.bind(Object(h.a)(n)),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"githubColor",value:function(){console.log("github Color is wokring"),this.setState((function(e,t){return{backColor:"github"}})),console.log(this.state.backColor)}},{key:"linkedinColor",value:function(){console.log("linkedin Color is wokring"),this.setState((function(e,t){return{backColor:"linkedin"}})),console.log(this.state.backColor)}},{key:"resumeColor",value:function(){console.log("resume Color is wokring"),this.setState((function(e,t){return{backColor:"resume"}})),console.log(this.state.backColor)}},{key:"workColor",value:function(){console.log("work Color is wokring"),this.setState((function(e,t){return{backColor:"work"}})),console.log(this.state.backColor)}},{key:"render",value:function(){return r.a.createElement(O.Fade,{in:!0},r.a.createElement("div",{className:"topPart"},r.a.createElement("h1",null,"Helllo User"),r.a.createElement("h3",null,"I'm Yasser Alnader, a Software Engineering student at the University of Ottawa")),r.a.createElement("table",{onMouseOver:this.handleColor},r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement("td",null,r.a.createElement("tr",{className:"topRow",onMouseEnter:this.githubColor},r.a.createElement(E,null)),r.a.createElement("tr",{onMouseEnter:this.linkedinColor},r.a.createElement(d,null)),r.a.createElement("tr",{onMouseEnter:this.resumeColor},r.a.createElement(g,null))),r.a.createElement("td",null))))}}]),t}(r.a.Component),p=(n(1019),n(1020),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E,null))))}}]),t}(r.a.Component)),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={working:!1},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Test"),r.a.createElement(p,null))}}]),t}(r.a.Component),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={backColor:"App"},n.handleWork=n.handleWork.bind(Object(h.a)(n)),n.handleColor=n.handleColor.bind(Object(h.a)(n)),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"handleWork",value:function(){this.setState({work:!0}),console.log("The state has been set to true")}},{key:"handleColor",value:function(e){this.setState((function(t,n){return{backColor:e}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"AppUpper"},r.a.createElement("h1",null,"TEST"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:this.state.backColor},r.a.createElement("div",{className:"App-header"},this.state.work?r.a.createElement(w,null):r.a.createElement(j,{parentMethod:this.handleColor}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){e.exports=n(1022)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.bf170a02.chunk.js.map