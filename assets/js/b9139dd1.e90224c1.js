"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[3554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i="Overview",s={unversionedId:"newcoin-base-points/overview",id:"newcoin-base-points/overview",title:"Overview",description:"Base points are a special kind of Immutable Points. While they follow the exact same technical specification as any other onchain implementation of IPSP, the magic happens in the process that lead to their creation.",source:"@site/docs/newcoin-base-points/overview.md",sourceDirName:"newcoin-base-points",slug:"/newcoin-base-points/overview",permalink:"/docs/newcoin-base-points/overview",draft:!1,editUrl:"https://github.com/newfound8ion/developer/edit/master/docs/newcoin-base-points/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/ipsp/onchain-points/overview"},next:{title:"Registry",permalink:"/docs/newcoin-base-points/registry"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Base points are a special kind of Immutable Points. While they follow the exact same technical specification as any other onchain implementation of IPSP, the magic happens in the process that lead to their creation."),(0,r.kt)("p",null,"By querying Base Points, you are asynchronously querying all the points of a specific user, weighted and measured by the Newkamoto Consensus algorithm, which aggregates all the points from all agents including all the machine learning agents."),(0,r.kt)("p",null,"This consensus between agents allows you to not only get a full picture of a specific node within the Agent Graph, but to benefit from all the machine learning computations, for free, with a few lines of code."),(0,r.kt)("p",null,"Since Base Points are onchain, you can use them as parameters within your smart contracts and turn your decentralized application into a, yet immutable and credibly neutral, adaptive learning system."),(0,r.kt)("p",null,"And because Base Points are designed with the same interface as ERC-20, most of the business logic that used to work with tokens can now work with Base Points."),(0,r.kt)("p",null,"It means, you can build an Aragon DAO with basic token voting and use Immutable Points and Base Points instead of tokens. "),(0,r.kt)("p",null,"You can query WATT or IWATT balances to let the Internet decide if a user can mint NFTs and be featured on the homepage, in a fully permissionless way."),(0,r.kt)("p",null,"All the token-gating primitives can now apply to Base Points."),(0,r.kt)("p",null,"You can also use Base Points as a layer of protection against abuses and manipulations within your own Points system."),(0,r.kt)("p",null,"Here is a diagram of how Base Points are calculated:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/newfound8ion/developer/assets/112469623/941ebc1a-2257-44d9-82ff-eb645b000c06",alt:"image"})))}m.isMDXComponent=!0}}]);