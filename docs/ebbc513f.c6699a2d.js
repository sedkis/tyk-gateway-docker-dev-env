(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,y=s["".concat(c,".").concat(b)]||s[b]||u[b]||o;return r?a.a.createElement(y,i(i({ref:t},d),{},{components:r})):a.a.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(106)),c={id:"docker",title:"Docker",sidebar_label:"Docker",slug:"/gateway/other-install/docker"},i={unversionedId:"gateway/other-install/docker",id:"gateway/other-install/docker",isDocsHomePage:!1,title:"Docker",description:"This guide uses Docker to deploy Tyk & Redis.",source:"@site/docs/gateway/other-install/docker.md",slug:"/gateway/other-install/docker",permalink:"/tyk-gw-docker-dev-env/docs/gateway/other-install/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/gateway/other-install/docker.md",version:"current",sidebar_label:"Docker",sidebar:"someSidebar",previous:{title:"Adding Your First Plugin",permalink:"/tyk-gw-docker-dev-env/docs/gateway/your-first-plugin"}},l=[],d={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This guide uses Docker to deploy Tyk & Redis."),Object(o.b)("p",null,"First, Let's create a network and deploy Redis:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ docker network create tyk\nab1084d034c7e95735e10de804fc54aa940c031d2c4bb91d984675e5de2755e7\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker pull redis:4.0-alpine\n4.0-alpine: Pulling from library/redis\n....\ndocker.io/library/redis:4.0-alpine\n\n$ docker run -itd --rm --name redis --network tyk -p 127.0.0.1:6379:6379 redis:4.0-alpine\nea54db4da4b228b7868449882062a962f75a7b2d43cdb0ac5205fb4ccdbcde23\n")),Object(o.b)("p",null,"Now we can deploy the Gateway"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ docker pull tykio/tyk-gateway:latest\n\n$ TYK_GW_SECRET=foo\n\n$ docker run -d \\\n  --name tyk_gateway \\\n  --network tyk \\\n  -p 8080:8080 \\\n  -v $(pwd)/tyk.standalone.conf:/opt/tyk-gateway/tyk.conf \\\n  -v $(pwd)/apps:/opt/tyk-gateway/apps \\\n  tykio/tyk-gateway:latest\n")))}p.isMDXComponent=!0}}]);