(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{1596:function(e,r,n){"use strict";var t=n(4836);r.Z=void 0;var i=t(n(4938)),s=n(5893),a=(0,i.default)((0,s.jsx)("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight");r.Z=a},4339:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/strategy",function(){return n(4732)}])},1266:function(e,r,n){"use strict";n.d(r,{Z:function(){return _}});var t=n(5893),i=n(7294),s=n(9008),a=n(4298),o=n(1664),c=n(4925),l=n.n(c),u=n(5295),d=n(155),m=n(5861),p=n(3946),h=n(6426),x=n(8462),f=n(9518),j=n(6853),b=n(1703),v=n(44),g=n(6165),y=n.n(g);function w(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==o.return||o.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function(e){var r=e.open,n=e.setOpen,s=y()["menu-trigger"],a=w(i.useState(s),2),o=a[0],c=a[1],l=i.useCallback((function(){n(!r),c(o===s?"".concat(s," ").concat(y().active):s)}),[r,o,s]),u=i.useCallback((function(){n(!1),c(s)}),[]);return(0,t.jsx)(p.Z,{style:{marginRight:"2px"},color:"inherit","aria-label":"menu",children:(0,t.jsxs)("a",{href:"javascript:void(0)",className:o,onClick:l,onMouseLeave:u,children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})})},N=function(e){var r=e.headerItems,n=w(i.useState(!1),2),s=n[0],a=n[1],c=i.useMemo((function(){return 60}),[]),p=w(i.useState(0),2),g=p[0],N=p[1],S=i.useCallback((function(e,r){N(parseInt(r))}),[]);return(0,t.jsxs)(u.Z,{className:y()["app-bar"],children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(m.Z,{variant:"h6",className:y().title,children:(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("img",{src:"/img/header.png",className:y().typography})})}),(0,t.jsx)(j.Z,{smDown:!0,children:(0,t.jsx)(b.Z,{value:g,onChange:S,textColor:"secondary",indicatorColor:"secondary","aria-label":"secondary tabs example",children:r.map((function(e,r){return e.href.includes("/")?(0,t.jsx)(o.default,{href:e.href,children:(0,t.jsx)(v.Z,{value:r,label:e.name})},r.toString()):(0,t.jsx)(l(),{href:e.href,offset:c,className:y()["anchor-link"],children:(0,t.jsx)(v.Z,{value:r,label:e.name})},r.toString())}))})}),(0,t.jsx)(j.Z,{smUp:!0,children:(0,t.jsx)(k,{open:s,setOpen:a})})]}),(0,t.jsx)(h.Z,{in:s,children:(0,t.jsx)(x.Z,{component:"nav",children:r.map((function(e,r){return(0,t.jsx)(f.ZP,{children:(0,t.jsx)(o.default,{href:e.href,children:(0,t.jsx)(v.Z,{value:r,label:e.name,className:y()["mobile-header-link"]})})},r.toString())}))})})]})},S=function(){return(0,t.jsx)("footer",{className:"fdb-block footer-large bg-gray","data-block-type":"footers",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row mt-5",children:(0,t.jsx)("div",{className:"col text-center",children:"\xa9 2022 by Rio Hosoi. All Rights Reserved"})})})})},_=function(e){var r=e.headerItems,n=e.children;return(0,t.jsxs)("div",{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("meta",{name:"keywords",content:"FSK,\u6709\u9650\u4f1a\u793e,\u6709\u9650\u4f1a\u793eFSK,\u6709\u9650\u4f1a\u793e FSK"}),(0,t.jsx)("title",{children:"\u6709\u9650\u4f1a\u793e FSK"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(N,{headerItems:r}),n,(0,t.jsx)(S,{}),(0,t.jsx)(a.default,{src:"/js/hoge.js",strategy:"beforeInteractive"}),(0,t.jsx)(a.default,{src:"https://fsk0303.site/js/jquery-3.3.1.slim.min.js",strategy:"beforeInteractive"}),(0,t.jsx)(a.default,{src:"https://fsk0303.site/js/bubbly-bg.js",strategy:"beforeInteractive"}),(0,t.jsx)(a.default,{src:"https://fsk0303.site/js/call_bubbly-bg.js",strategy:"beforeInteractive"})]})}},2203:function(e,r,n){"use strict";var t=n(5893),i=(n(7294),n(7932));r.Z=function(e){var r=e.id,n=e.title,s=e.bgColor,a=e.children;return(0,t.jsxs)("div",{id:r,className:"bg-".concat(s),children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("h1",{className:"text-center text-secondary",children:n}),(0,t.jsx)("div",{className:"mx-auto yellow-line"}),(0,t.jsx)("br",{}),(0,t.jsx)(i.Z,{children:a}),(0,t.jsx)("br",{})]})}},3579:function(e,r,n){"use strict";n.d(r,{q:function(){return t}});var t=[{name:"\u4f1a\u793e\u7d39\u4ecb",id:"syokai",href:"/#syokai"},{name:"\u4fdd\u6709\u6280\u8853",id:"setsubi",href:"/#setsubi"},{name:"\u4e3b\u8981\u8a2d\u5099",id:"equipment",href:"/#equipment"},{name:"\u7d4c\u55b6\u65b9\u91dd",id:"management",href:"/strategy#management"},{name:"\u74b0\u5883\u65b9\u91dd",id:"environment",href:"/strategy#environment"}]},4732:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return B}});var t=n(5893),i=n(7294),s=n(1266),a=n(6426),o=n(7932),c=n(3366),l=n(7462),u=n(6010),d=n(6663),m=n(7893),p=n(4780),h=n(948),x=n(1657),f=n(2734);var j=i.createContext(),b=n(4867);function v(e){return(0,b.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var y=(0,n(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]);const w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function k(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function N({breakpoints:e,values:r}){let n="";Object.keys(r).forEach((e=>{""===n&&0!==r[e]&&(n=e)}));const t=Object.keys(e).sort(((r,n)=>e[r]-e[n]));return t.slice(0,t.indexOf(n))}const S=(0,h.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e,{container:t,direction:i,item:s,spacing:a,wrap:o,zeroMinWidth:c,breakpoints:l}=n;let u=[];t&&(u=function(e,r,n={}){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n[`spacing-xs-${String(e)}`]];const t=[];return r.forEach((r=>{const i=e[r];Number(i)>0&&t.push(n[`spacing-${r}-${String(i)}`])})),t}(a,l,r));const d=[];return l.forEach((e=>{const t=n[e];t&&d.push(r[`grid-${e}-${String(t)}`])})),[r.root,t&&r.container,s&&r.item,c&&r.zeroMinWidth,...u,"row"!==i&&r[`direction-xs-${String(i)}`],"wrap"!==o&&r[`wrap-xs-${String(o)}`],...d]}})((({ownerState:e})=>(0,l.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:r}){const n=(0,d.P$)({values:r.direction,breakpoints:e.breakpoints.values});return(0,d.k9)({theme:e},n,(e=>{const r={flexDirection:e};return 0===e.indexOf("column")&&(r[`& > .${y.item}`]={maxWidth:"none"}),r}))}),(function({theme:e,ownerState:r}){const{container:n,rowSpacing:t}=r;let i={};if(n&&0!==t){const r=(0,d.P$)({values:t,breakpoints:e.breakpoints.values});let n;"object"===typeof r&&(n=N({breakpoints:e.breakpoints.values,values:r})),i=(0,d.k9)({theme:e},r,((r,t)=>{const i=e.spacing(r);return"0px"!==i?{marginTop:`-${k(i)}`,[`& > .${y.item}`]:{paddingTop:k(i)}}:n.includes(t)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}}))}return i}),(function({theme:e,ownerState:r}){const{container:n,columnSpacing:t}=r;let i={};if(n&&0!==t){const r=(0,d.P$)({values:t,breakpoints:e.breakpoints.values});let n;"object"===typeof r&&(n=N({breakpoints:e.breakpoints.values,values:r})),i=(0,d.k9)({theme:e},r,((r,t)=>{const i=e.spacing(r);return"0px"!==i?{width:`calc(100% + ${k(i)})`,marginLeft:`-${k(i)}`,[`& > .${y.item}`]:{paddingLeft:k(i)}}:n.includes(t)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}}))}return i}),(function({theme:e,ownerState:r}){let n;return e.breakpoints.keys.reduce(((t,i)=>{let s={};if(r[i]&&(n=r[i]),!n)return t;if(!0===n)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=(0,d.P$)({values:r.columns,breakpoints:e.breakpoints.values}),o="object"===typeof a?a[i]:a;if(void 0===o||null===o)return t;const c=Math.round(n/o*1e8)/1e6+"%";let u={};if(r.container&&r.item&&0!==r.columnSpacing){const n=e.spacing(r.columnSpacing);if("0px"!==n){const e=`calc(${c} + ${k(n)})`;u={flexBasis:e,maxWidth:e}}}s=(0,l.Z)({flexBasis:c,flexGrow:0,maxWidth:c},u)}return 0===e.breakpoints.values[i]?Object.assign(t,s):t[e.breakpoints.up(i)]=s,t}),{})}));const _=e=>{const{classes:r,container:n,direction:t,item:i,spacing:s,wrap:a,zeroMinWidth:o,breakpoints:c}=e;let l=[];n&&(l=function(e,r){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const n=[];return r.forEach((r=>{const t=e[r];if(Number(t)>0){const e=`spacing-${r}-${String(t)}`;n.push(e)}})),n}(s,c));const u=[];c.forEach((r=>{const n=e[r];n&&u.push(`grid-${r}-${String(n)}`)}));const d={root:["root",n&&"container",i&&"item",o&&"zeroMinWidth",...l,"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,p.Z)(d,v,r)};var Z=i.forwardRef((function(e,r){const n=(0,x.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,f.Z)(),a=(0,m.Z)(n),{className:o,columns:d,columnSpacing:p,component:h="div",container:b=!1,direction:v="row",item:g=!1,rowSpacing:y,spacing:k=0,wrap:N="wrap",zeroMinWidth:Z=!1}=a,$=(0,c.Z)(a,w),C=y||k,O=p||k,W=i.useContext(j),E=b?d||12:W,M={},z=(0,l.Z)({},$);s.keys.forEach((e=>{null!=$[e]&&(M[e]=$[e],delete z[e])}));const H=(0,l.Z)({},a,{columns:E,container:b,direction:v,item:g,rowSpacing:C,columnSpacing:O,wrap:N,zeroMinWidth:Z,spacing:k},M,{breakpoints:s.keys}),I=_(H);return(0,t.jsx)(j.Provider,{value:E,children:(0,t.jsx)(S,(0,l.Z)({ownerState:H,className:(0,u.Z)(I.root,o),as:h,ref:r},z))})})),$=n(5503),C=n(1596),O=n(2203),W=n(7111),E=n.n(W);function M(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==o.return||o.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(e){var r=M(i.useState(!1),2),n=r[0],s=r[1],c=i.useCallback((function(e){var r=e.title,n=e.description;return(0,t.jsxs)(Z,{item:!0,children:[(0,t.jsxs)("h3",{children:[(0,t.jsx)(C.Z,{fontSize:"medium"}),(0,t.jsx)("span",{children:r})]}),(0,t.jsx)("p",{className:"ml-4",children:n})]})}),[]);return(0,t.jsxs)(O.Z,{id:e.id,title:e.name,bgColor:"gray",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h4",{style:{lineHeight:"2.5rem",marginBottom:"5px"},children:"\u793e\u54e1\u4e00\u4e38\u3068\u306a\u3063\u3066\u88fd\u54c1\u306e\u9ad8\u54c1\u8cea\u5316\u3001\u77ed\u7d0d\u671f\u306a\u3069\u306e\u3054\u8981\u671b\u306b\u6cbf\u3048\u308b\u3088\u3046\u5168\u529b\u3092\u5c3d\u304f\u3057\u307e\u3059\u3002"}),(0,t.jsxs)(a.Z,{in:!n,children:[(0,t.jsx)("br",{}),(0,t.jsx)("a",{className:E().readmore,onClick:function(){return s(!0)},children:(0,t.jsx)($.Z,{})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})]}),(0,t.jsx)(a.Z,{in:n,children:(0,t.jsxs)(o.Z,{className:"py-4",children:[(0,t.jsx)(Z,{container:!0}),(0,t.jsx)(c,{title:"\u4f5c\u696d\u6539\u5584",description:"\u3088\u308a\u5b89\u5fc3\u30fb\u5b89\u5168\u306a\u88fd\u54c1\u3092\u5229\u7528\u3057\u3066\u3044\u305f\u3060\u304f\u305f\u3081\u3001\u6280\u8853\u529b\u306e\u5411\u4e0a\u3084\u4f5c\u696d\u306e\u6539\u5584\u306b\u6700\u5927\u9650\u52aa\u529b\u3057\u307e\u3059"}),(0,t.jsx)(c,{title:"\u4e8b\u6545\u30bc\u30ed",description:"\u6cd5\u4ee4\u3092\u9075\u5b88\u3057\u3001\u672a\u7136\u306b\u4e8b\u6545\u3092\u9632\u304e\u307e\u3059"}),(0,t.jsx)(c,{title:"\u4f4e\u30b3\u30b9\u30c8\u5316",description:"\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3059\u308b\u305f\u3081\u3001\u65e5\u3005\u6539\u5584\u306b\u52aa\u3081\u307e\u3059"}),(0,t.jsx)(c,{title:"\u4eba\u6750\u80b2\u6210",description:"\u82e5\u3044\u4eba\u6750\u3092\u7a4d\u6975\u7684\u306b\u63a1\u7528\u3057\u3001\u9032\u6b69\u3059\u308b\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306e\u4fee\u5f97\u3068\u719f\u7df4\u5de5\u304b\u3089\u306e\u6280\u8853\u3092\u627f\u7d99\u3057\u3001\u672a\u6765\u306e\u88fd\u9020\u6d3b\u52d5\u306e\u5e45\u3092\u5e83\u3052\u307e\u3059"})]})})]})};function H(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==o.return||o.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){var r=H(i.useState(!1),2),n=r[0],s=r[1];return(0,t.jsxs)(O.Z,{id:e.id,title:e.name,bgColor:"white",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h4",{style:{lineHeight:"2.5rem",marginBottom:"5px"},children:"\u79c1\u305f\u3061\u306f\u65e5\u3005\u74b0\u5883\u306b\u3082\u914d\u616e\u3057\u3066\u3001\u3082\u306e\u3065\u304f\u308a\u3092\u3057\u3066\u3044\u307e\u3059\u3002"}),(0,t.jsxs)(a.Z,{in:!n,children:[(0,t.jsx)("br",{}),(0,t.jsx)("a",{className:E().readmore,onClick:function(){return s(!0)},children:(0,t.jsx)($.Z,{})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(a.Z,{in:n,children:[(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"box",children:[(0,t.jsx)("h3",{className:"text-center",children:"\u74b0\u5883\u3078\u306e\u914d\u616e"}),(0,t.jsxs)("p",{className:"text-center",children:["\u7dba\u9e97\u306a\u5730\u7403\u306e\u74b0\u5883\u3092\u6b21\u4e16\u4ee3\u3078",(0,t.jsx)("br",{}),"\u3064\u306a\u3052\u308b\u4e8b\u304c\u4eba\u9593\u306e\u8cac\u4efb\u3067\u3042\u308b",(0,t.jsx)("br",{}),"\u3068\u8003\u3048\u3001\u74b0\u5883\u306e\u4fdd\u5168\u3068\u5730\u57df",(0,t.jsx)("br",{}),"\u3078\u306e\u5354\u529b\u3092\u884c\u3044\u3001\u65e5\u3005\u52e4\u3081\u3066",(0,t.jsx)("br",{}),"\u304a\u308a\u307e\u3059\u3002"]})]})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"box",children:[(0,t.jsx)("h3",{className:"text-center",children:"\u8cc7\u7523\u306e\u6d3b\u7528"}),(0,t.jsxs)("p",{className:"text-center",children:["\u88fd\u9020\u6d3b\u52d5\u3092\u901a\u3058\u3066\u3001\u7701\u8cc7\u6e90\u3001",(0,t.jsx)("br",{}),"\u5ec3\u68c4\u7269\u306e\u524a\u6e1b\u3001\u7701\u30a8\u30cd\u306e\u63a8\u9032",(0,t.jsx)("br",{}),"\u306b\u52aa\u3081\u307e\u3059\u3002"]})]})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsxs)("div",{className:"box",children:[(0,t.jsx)("h3",{className:"text-center",children:"\u4e00\u4eba\u4e00\u4eba\u306e\u610f\u8b58"}),(0,t.jsxs)("p",{className:"text-center",children:["\u4f01\u696d\u3078\u306e\u74b0\u5883\u306b\u95a2\u3057\u3066\u306e\u4e8b\u9805\u3092",(0,t.jsx)("br",{}),"\u9075\u5b88\u3057\u3066\u3001\u793e\u54e1\u4e00\u4eba\u4e00\u4eba\u304c\u3001",(0,t.jsx)("br",{}),"\u74b0\u5883\u554f\u984c\u3092\u8003\u3048\u3001\u5927\u6c17\u6c5a\u67d3\u3001",(0,t.jsx)("br",{}),"\u6cb3\u5ddd\u6c5a\u67d3\u3001\u571f\u58cc\u6c5a\u67d3\u306e\u4e88\u9632\u306b",(0,t.jsx)("br",{}),"\u52d9\u3081\u3066\u304a\u308a\u307e\u3059\u3002"]})]})})]})]})]})},P=n(3579);function A(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function T(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){A(e,r,n[r])}))}return e}var B=function(){return(0,t.jsx)(s.Z,{headerItems:P.q,children:(0,t.jsxs)("div",{style:{margin:"60px 0"},children:[(0,t.jsx)(z,T({},P.q[3])),(0,t.jsx)(I,T({},P.q[4]))]})})}},7111:function(e){e.exports={readmore:"Introduce_readmore__2NDzZ"}},6165:function(e){e.exports={"app-bar":"Header_app-bar__brSKA",typography:"Header_typography__3j459","anchor-link":"Header_anchor-link__rhZZA","mobile-header-link":"Header_mobile-header-link__3D7vk",title:"Header_title__2COtB","menu-trigger":"Header_menu-trigger__2r41Z","menu-bar01":"Header_menu-bar01__pGvTh","menu-bar02":"Header_menu-bar02__3GU_B",active:"Header_active__1Ttcz","active-menu-bar01":"Header_active-menu-bar01__1ByWV","active-menu-bar03":"Header_active-menu-bar03__19a3B"}}},function(e){e.O(0,[774,810,888,179],(function(){return r=4339,e(e.s=r);var r}));var r=e.O();_N_E=r}]);