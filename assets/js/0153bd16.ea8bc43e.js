"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[8307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=i,g=d["".concat(l,".").concat(p)]||d[p]||v[p]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a="Activation Functions Logic",c={unversionedId:"getting-started/creating-watts/activation-function-logic",id:"getting-started/creating-watts/activation-function-logic",title:"Activation Functions Logic",description:"Writing the Vote Contract",source:"@site/docs/getting-started/creating-watts/activation-function-logic.md",sourceDirName:"getting-started/creating-watts",slug:"/getting-started/creating-watts/activation-function-logic",permalink:"/docs/getting-started/creating-watts/activation-function-logic",draft:!1,editUrl:"https://github.com/newfound8ion/developer/edit/master/docs/getting-started/creating-watts/activation-function-logic.md",tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Writing the Vote Contract",id:"writing-the-vote-contract",level:2},{value:"Overview",id:"overview",level:3},{value:"Contract Variables:",id:"contract-variables",level:3},{value:"Contract Initialization:",id:"contract-initialization",level:3},{value:"Voting Mechanism:",id:"voting-mechanism",level:3},{value:"Activation Check:",id:"activation-check",level:3},{value:"Events:",id:"events",level:3}],u={toc:s},d="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activation-functions-logic"},"Activation Functions Logic"),(0,i.kt)("h2",{id:"writing-the-vote-contract"},"Writing the Vote Contract"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"For our activation function, we're utilizing a simple voting mechanism. Users will be able to cast their votes, and once a certain threshold of votes is reached, the activation function will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This signifies that the conditions for activation have been met."),(0,i.kt)("p",null,"Normally we would want our conditions to be a little more rhobust and connected to real world conditions that we can't game. But this will illistrate the approach until then."),(0,i.kt)("h3",{id:"contract-variables"},"Contract Variables:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"votes"),": A counter to keep track of the total votes cast."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"requiredVotes"),": The threshold number of votes required for activation."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"hasVoted"),": A mapping to track whether an address has already voted, ensuring one vote per address.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 public votes;\nuint256 public requiredVotes;\nmapping(address => bool) public hasVoted;\n")),(0,i.kt)("h3",{id:"contract-initialization"},"Contract Initialization:"),(0,i.kt)("p",null,"When deploying the contract, specify the number of votes required for the activation function to return true."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(uint256 _requiredVotes) {\n    requiredVotes = _requiredVotes;\n}\n")),(0,i.kt)("h3",{id:"voting-mechanism"},"Voting Mechanism:"),(0,i.kt)("p",null,"Users can cast their vote using the vote function. Each vote increments the votes counter and registers the voter's address, ensuring that each address can only vote once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'function vote() external {\n    require(!hasVoted[msg.sender], "You have already voted.");\n\n    votes++;\n    hasVoted[msg.sender] = true;\n\n    emit Voted(msg.sender);\n}\n')),(0,i.kt)("h3",{id:"activation-check"},"Activation Check:"),(0,i.kt)("p",null,"The activate function checks if the number of votes meets or exceeds the required threshold."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function activate() external view override returns (bool) {\n    return votes >= requiredVotes;\n}\n")),(0,i.kt)("h3",{id:"events"},"Events:"),(0,i.kt)("p",null,"To track voting actions on the blockchain, an event is emitted every time a vote is cast."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Voted(address indexed voter);\n")))}v.isMDXComponent=!0}}]);