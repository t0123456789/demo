(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Bl7J:function(e,t,a){"use strict";var n=a("Ci6p"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),i=function(e){return l.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},l.a.createElement(o.Link,{to:e.to},e.children))};t.a=function(e){var t=e.children,a=n.data;return l.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},l.a.createElement("header",{style:{marginBottom:"1.5rem"}},l.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},l.a.createElement("h3",{style:{display:"inline"}},a.site.siteMetadata.title)),l.a.createElement("ul",{style:{listStyle:"none",float:"right"}},l.a.createElement(i,{to:"/"},"Home"),l.a.createElement(i,{to:"/about/"},"About"),l.a.createElement(i,{to:"/contact/"},"Contact"),l.a.createElement(i,{to:"/files/"},"Files"))),t)}},Ci6p:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"DemoSite"}}}}')},IXUO:function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),r=a.n(n);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.render=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Play ",this.props.name,"! "),r.a.createElement("h4",null,"use the arrow keys"),r.a.createElement("iframe",{src:"/bin/webgl/index.html",title:"dummy",style:{width:"400px",height:"300px"}}))},l.oldrender=function(){return r.a.createElement("h4",null,"Play, ",this.props.name)},n}(r.a.Component);t.a=l},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("IXUO"),i=a("Wbzz"),c=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(i.Link,{to:e.to},e.children))};t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(l.a,null,r.a.createElement("p",null,"What is this? "),r.a.createElement("p",null,"A test website with various place holder demos made using Unity game engine and other random things."),r.a.createElement(o.a,{name:"Capsule Demo"}),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(i.Link,{to:t.fields.slug},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",null,"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})),r.a.createElement(c,{to:"/about/"},"About"))};var m="1843791609"}}]);
//# sourceMappingURL=component---src-pages-index-js-99a69fb8a16be7ef0c02.js.map