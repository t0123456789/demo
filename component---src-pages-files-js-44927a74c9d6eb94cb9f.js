(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Bl7J:function(e,t,n){"use strict";var a=n("Ci6p"),l=n("q1tI"),r=n.n(l),o=n("Wbzz"),i=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(o.Link,{to:e.to},e.children))};t.a=function(e){var t=e.children,n=a.data;return r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},r.a.createElement("header",{style:{marginBottom:"1.5rem"}},r.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},r.a.createElement("h3",{style:{display:"inline"}},n.site.siteMetadata.title)),r.a.createElement("ul",{style:{listStyle:"none",float:"right"}},r.a.createElement(i,{to:"/"},"Home"),r.a.createElement(i,{to:"/about/"},"About"),r.a.createElement(i,{to:"/contact/"},"Contact"),r.a.createElement(i,{to:"/files/"},"Files"))),t)}},Ci6p:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"DemoSite"}}}}')},IXUO:function(e,t,n){"use strict";n("f3/d");var a=n("q1tI"),l=n.n(a);var r=["/demo/bin/webgl/index.html","/demo/bin/webgl2018/index.html"],o=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.render=function(){var e=this.props.index;if(console.log(e),e<0||e>=r.length)return null;if(!this.props.enable)return l.a.createElement("div",{className:"playdemo"},l.a.createElement("h4",null,this.props.name,"! Play enable ctrl: select single engine instance per site?"));var t=r[e];return console.log(t),l.a.createElement("div",{className:"playdemo"},l.a.createElement("h2",null,"Play ",this.props.name,"! "),l.a.createElement("h4",null,"use the arrow keys"),l.a.createElement("iframe",{src:t,title:"dummy",style:{width:"400px",height:"300px"}}))},o.oldrender=function(){return l.a.createElement("h4",null,"Play, ",this.props.name)},a}(l.a.Component);t.a=o},kchs:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("Bl7J"),o=n("IXUO");n("f3/d");var i=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Download ",this.props.name),l.a.createElement("p",null," "))},a}(l.a.Component);function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"query",(function(){return m}));var u=function(e){function t(){return e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this.props.info;return console.log(e),this.props.enable?l.a.createElement("div",null,l.a.createElement("h2",null,"file list "),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"relativePath"),l.a.createElement("th",null,"prettySize"),l.a.createElement("th",null,"extension"),l.a.createElement("th",null,"birthTime"))),l.a.createElement("tbody",null,e.allFile.edges.map((function(e,t){var n=e.node;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,n.relativePath),l.a.createElement("td",null,n.prettySize),l.a.createElement("td",null,n.extension),l.a.createElement("td",null,n.birthTime))}))))):null},t}(l.a.Component),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!1},n.handleToggleClick=n.handleToggleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}c(t,e);var n=t.prototype;return n.handleToggleClick=function(){this.setState((function(e){return{show:!e.show}}))},n.render=function(){var e=this.state.show,t=null;return e&&(t=l.a.createElement("button",{onClick:this.handleToggleClick},"Hide")),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleToggleClick},e?"Hide":"Show"),l.a.createElement(u,{info:this.props.info,enable:e}),t)},t}(l.a.Component),m=(t.default=function(e){var t=e.data;return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(o.a,{name:"Capsule Demo",index:0,enable:!1}),l.a.createElement(o.a,{name:"Dog Demo",index:1,enable:!0}),l.a.createElement(i,{name:"win 64 zip install"}),l.a.createElement(i,{name:"linux zip install"}),l.a.createElement(s,{info:t})))},"3953592347")}}]);
//# sourceMappingURL=component---src-pages-files-js-44927a74c9d6eb94cb9f.js.map