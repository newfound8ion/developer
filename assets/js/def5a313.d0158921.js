"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[8207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Immutable Points",s={unversionedId:"core-concepts/ipsp",id:"core-concepts/ipsp",title:"Immutable Points",description:"Newcoin uses the Immutable Points Standard protocol (IPSP) as a serialization and normalization layer between all the heterogenous value statements on the internet and the Agent Graph, representing agents by their DiDs, units of content are represented by Open Graph objects and edges are Immutable Points as described in the Immutable Points Standard Protocol, which itself is referencing standards from Verifiable Credentials, Activity Streams and Schema.org.",source:"@site/docs/core-concepts/ipsp.md",sourceDirName:"core-concepts",slug:"/core-concepts/ipsp",permalink:"/docs/core-concepts/ipsp",draft:!1,editUrl:"https://github.com/newfound8ion/developer/edit/master/docs/core-concepts/ipsp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducing Newcoin For Developers",permalink:"/docs/intro"},next:{title:"WATT",permalink:"/docs/core-concepts/WATT"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"immutable-points"},"Immutable Points"),(0,a.kt)("p",null,"Newcoin uses the Immutable Points Standard protocol (IPSP) as a serialization and normalization layer between all the heterogenous value statements on the internet and the Agent Graph, representing agents by their DiDs, units of content are represented by Open Graph objects and edges are Immutable Points as described in the Immutable Points Standard Protocol, which itself is referencing standards from Verifiable Credentials, Activity Streams and Schema.org. "),(0,a.kt)("p",null,"IPSP is like the RSS feed of how agents relate to other nodes in the Agent Graph, providing a standardized schema for value statements. IPSP is a technology-agnostic standard schema, similar to verifiable credentials, ERC-20 or NFTs, which can be bridged or proven regardless of the platform, programming language or communication protocol. "),(0,a.kt)("p",null,"Points are verifiable data constructs similar to emails, where both the issuer and the subject have access to the data, and can present it to third parties (verifiers) with a cryptographic signature or the blockchain state itself, making it an overarching trust network that transcends all the technical fragmentation of identity systems, social graphs and blockchains. "),(0,a.kt)("p",null,"With IPSP, all relationships between nodes are numbers with context files following the JLD semantic formatting. For maximum interoperability, the credential edges are primarily numerical: Immutable Points, and represent how agents value any node in the agent graph, where each agent issues points that represent how they value a node, similar to a like, a rating, a vote, a positive sentiment about such nodes (static or agentic). "),(0,a.kt)("p",null,"The credentials can link to context files with a standardised and controlled vocabulary made of linked data JLD files that serve as contextual registry for edges. "),(0,a.kt)("p",null,"This lightweight protocol aims to be more of an open index, akin to the Google knowledge graph, than a platform. It indexes and serialises existing relationships from public data records such as social graphs and blockchains, to establish a map, and allows owners of accounts to claim ownership of their credentials to accrue reputation and claim benefits derived from sybil resistance. "),(0,a.kt)("p",null,"Application developers can also decide to natively comply with the standard and automatically inherit from the vast amount of nodes and edges that exist, hereby solving the cold start problem and joining a deep inter-platform network effect."))}m.isMDXComponent=!0}}]);