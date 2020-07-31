_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return u}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return(a.a.createElement(l.Provider,{value:t},e.children))},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},B1Gs:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("7ljp"),p=(c.a.createElement,{}),l="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"cache"},"Cache"),Object(i.b)("p",null,"Cache is a context provider with a map-like interface. It can store any\narbitrary key-value pairs. The ",Object(i.b)("inlineCode",{parentName:"p"},"Fetch")," component uses ",Object(i.b)("inlineCode",{parentName:"p"},"Cache")," to store promises\nreturned from ",Object(i.b)("inlineCode",{parentName:"p"},"GET")," requests keyed by the URL. The timestamp information is\nalso included to assist with time-based invalidation strategies (via the\n",Object(i.b)("inlineCode",{parentName:"p"},"maxAge")," prop)."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"React.Component<CacheProps, CacheState>\n")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"type CacheProps = {\n  map: Map<*, *>,\n  children?: React.Node,\n};\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"map")," prop accepts any map-like interface. At a minimum, it should be\niterable and provide methods for ",Object(i.b)("inlineCode",{parentName:"p"},"get()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"set()"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"delete()"),".")),Object(i.b)("h2",{id:"state"},"State"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"type CacheState = {\n  get: (key: *) => *,\n  set: (key: *, value: *) => Map<*, *>,\n  delete: (key: *) => boolean,\n  entries: () => Iterator<*>,\n  values: () => Iterator<*>,\n  keys: () => Iterator<*>,\n};\n")),Object(i.b)("p",null,"This state is passed to the context provider which is then used internally by\n",Object(i.b)("inlineCode",{parentName:"p"},"Resource"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The cache consumer shown below is for illustration purposes only. It is used\ninternally by ",Object(i.b)("inlineCode",{parentName:"p"},"Resource")," and is not meant to be used directly.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport { Cache } from "rsrc";\n\nexport default () => (\n  <Cache>\n    <Cache.Consumer>\n      {(cache) => {\n        const addRandomEntry = () => {\n          cache.set(+new Date(), Math.random());\n        };\n        const removeEntry = (key) => {\n          cache.delete(key);\n        };\n        return (\n          <>\n            <button onClick={addRandomEntry}>Add entry</button>\n            <ul>\n              {[...cache.entries()].map(([key, value]) => (\n                <li key={key}>\n                  <button onClick={() => removeEntry(key)}>\xd7</button>\n                  {`${key}: ${value}`}\n                </li>\n              ))}\n            </ul>\n          </>\n        );\n      }}\n    </Cache.Consumer>\n  </Cache>\n);\n')))}u.isMDXComponent=!0},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"n/Qb":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/api/cache",function(){return n("B1Gs")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["n/Qb",0,1]]]);