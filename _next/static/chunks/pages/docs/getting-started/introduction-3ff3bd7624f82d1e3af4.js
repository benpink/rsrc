_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return(a.a.createElement(s.Provider,{value:t},e.children))},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"===typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZnR4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/getting-started/introduction",function(){return n("kaPs")}])},kaPs:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("7ljp"),l=(c.a.createElement,{}),s="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"There are a number of great solutions for managing async fetch state in the\nReact ecosystem but many of these require a non-trivial amount of boilerplate\nor framework knowledge to implement and maintain."),Object(i.b)("p",null,"This project attempts to identify and abstract generic fetch state utilities\ninto composable components that are as flexible and expressive as the underlying\ntechnologies they expose."),Object(i.b)("p",null,"For more on the backstory, please check out the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://building.signalsciences.com/rsrc"}),"announcement")," on the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://building.signalsciences.com/"}),"Signal Sciences blog"),"."),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"reduce dependence on common boilerplate for managing fetch state"),Object(i.b)("li",{parentName:"ul"},"facilitate the collocation of data fetching alongside the components that\nrely on it"),Object(i.b)("li",{parentName:"ul"},"simplify cache management and invalidation")),Object(i.b)("h2",{id:"what-does-this-do"},"What does this do?"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Cache")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cache is a context provider that exposes a ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"}),"map"),"-like interface. This should be mounted near the top of your application tree similar to other context providers.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fetch")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Fetch is a component that exposes a declarative interface for the ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," api. Its main job is to translate ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"promise")," state into consumable props and provide methods to read, invalidate, and refresh fetch states.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Resource")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resource glues together the above functionality with a more expressive interface. If Fetch represents an individual request state, a Resource can be thought of as a more generic entity description that defines and exposes additional or related actions for a given endpoint.")))),Object(i.b)("h2",{id:"what-doesnt-this-do"},"What doesn't this do?"),Object(i.b)("p",null,"Server-side rendering (SSR), and cache initialization from serialized state are\nnot supported out of the box. This is because rsrc leverages raw promises rather\nthan serialized objects to persist state internally."),Object(i.b)("p",null,"That said, the cache component accepts any map-like interface, so it should be\npossible to serialize resolved states, and then rewrap them in promises before\npassing along to the cache provider."),Object(i.b)("h2",{id:"references--credits"},"References & Credits"),Object(i.b)("p",null,"Related projects, inspiration, and references:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/heroku/react-refetch"}),"heroku/react-refetch"))))}b.isMDXComponent=!0},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["ZnR4",0,1]]]);