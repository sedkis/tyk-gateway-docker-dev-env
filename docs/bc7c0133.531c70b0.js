(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),y=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=y(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=y(n),l=r,m=d["".concat(i,".").concat(l)]||d[l]||p[l]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return y}));var r=n(3),a=n(7),o=(n(0),n(106)),i={id:"overview",title:"Tyk Gateway Overview",sidebar_label:"Overview",slug:"/gateway/overview"},c={unversionedId:"gateway/overview",id:"gateway/overview",isDocsHomePage:!1,title:"Tyk Gateway Overview",description:"The Tyk Community Edition is the open-source API Gateway that is developed by our community and supported by our community members and advocates (with some help from the Tyk Technologies team). The Tyk Community Edition is a Tyk Gateway only edition.",source:"@site/docs/gateway/overview.md",slug:"/gateway/overview",permalink:"/tyk-gw-docker-dev-env/docs/gateway/overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/gateway/overview.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"Installation",permalink:"/tyk-gw-docker-dev-env/docs/gateway/installation"}},u=[{value:"Redis Dependency",id:"redis-dependency",children:[]},{value:"Gateway API",id:"gateway-api",children:[]}],s={toc:u};function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Tyk Community Edition is the open-source API Gateway that is developed by our community and supported by our community members and advocates (with some help from the Tyk Technologies team). The Tyk Community Edition is a Tyk Gateway only edition."),Object(o.b)("h2",{id:"redis-dependency"},"Redis Dependency"),Object(o.b)("p",null,"Gateway uses Redis as dependency."),Object(o.b)("h2",{id:"gateway-api"},"Gateway API"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://site-dev.tykbeta.com/docs/tyk-apis/"}),"Gateway REST API")))}y.isMDXComponent=!0}}]);