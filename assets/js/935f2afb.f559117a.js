"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introducing Newcoin For Developers","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Core Concepts","items":[{"type":"link","label":"Agents","href":"/docs/core-concepts/agents","docId":"core-concepts/agents"},{"type":"link","label":"Immutable Points","href":"/docs/core-concepts/ipsp","docId":"core-concepts/ipsp"},{"type":"link","label":"Newkamoto Consensus","href":"/docs/core-concepts/newkamoto-consensus","docId":"core-concepts/newkamoto-consensus"},{"type":"link","label":"WATT","href":"/docs/core-concepts/WATT","docId":"core-concepts/WATT"},{"type":"link","label":"Base Points","href":"/docs/core-concepts/base-points","docId":"core-concepts/base-points"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Using Watts","items":[{"type":"link","label":"Querying WATT Balance","href":"/docs/getting-started/using-watts/querying-watts","docId":"getting-started/using-watts/querying-watts"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"category","label":"Gitcoin, Guild.xyz and Chainlink","items":[{"type":"link","label":"Introduction","href":"/docs/guides/gitcoin-chainlink-guild/introduction","docId":"guides/gitcoin-chainlink-guild/introduction"},{"type":"link","label":"Step 1: Stubbing the Contract","href":"/docs/guides/gitcoin-chainlink-guild/stubbing-the-contract","docId":"guides/gitcoin-chainlink-guild/stubbing-the-contract"},{"type":"link","label":"Step 2: Implementing Activation Function and Oracle Request Logic","href":"/docs/guides/gitcoin-chainlink-guild/implementing-function-oracle","docId":"guides/gitcoin-chainlink-guild/implementing-function-oracle"},{"type":"link","label":"Step 3: Ensuring Secure and Efficient Contract Operation","href":"/docs/guides/gitcoin-chainlink-guild/securing-the-contract","docId":"guides/gitcoin-chainlink-guild/securing-the-contract"},{"type":"link","label":"Step 4: Interacting with the Encoder and Activating the Function","href":"/docs/guides/gitcoin-chainlink-guild/registering-the-function","docId":"guides/gitcoin-chainlink-guild/registering-the-function"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Jokerace Vote Checker","items":[{"type":"link","label":"Introduction","href":"/docs/guides/joke-vote-race/introduction","docId":"guides/joke-vote-race/introduction"},{"type":"link","label":"joke-vote","href":"/docs/guides/joke-vote-race/joke-vote","docId":"guides/joke-vote-race/joke-vote"},{"type":"link","label":"joke-and-checker","href":"/docs/guides/joke-vote-race/joke-and-checker","docId":"guides/joke-vote-race/joke-and-checker"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true}]},"docs":{"core-concepts/activation-function":{"id":"core-concepts/activation-function","title":"Activation Function","description":"Introduction"},"core-concepts/agents":{"id":"core-concepts/agents","title":"Agents","description":"Agents are entities issuing Points as rating of nodes within the Agent Graph.","sidebar":"tutorialSidebar"},"core-concepts/base-points":{"id":"core-concepts/base-points","title":"Base Points","description":"Base points are aggregating all the algorithmic points into specific categories of merits, quantified by the innovative Proof-of-Creativity algorithm. These points are pivotal in understanding and leveraging the value each participant brings to the ecosystem.","sidebar":"tutorialSidebar"},"core-concepts/encoder":{"id":"core-concepts/encoder","title":"Encoder","description":"Introduction"},"core-concepts/ipsp":{"id":"core-concepts/ipsp","title":"Immutable Points","description":"Newcoin uses the Immutable Points Standard protocol (IPSP) as a serialization and normalization layer between all the heterogenous value statements on the internet and the Agent Graph, representing agents by their DiDs, units of content are represented by Open Graph objects and edges are Immutable Points as described in the Immutable Points Standard Protocol, which itself is referencing standards from Verifiable Credentials, Activity Streams and Schema.org.","sidebar":"tutorialSidebar"},"core-concepts/newkamoto-consensus":{"id":"core-concepts/newkamoto-consensus","title":"Newkamoto Consensus","description":"The Newkamoto Consensus is a machine learning process based on a combination of Proof-of-Creativity and Proof-of-Stake, to achieve consensus on the weights of the Newkamoto Graph Neural Network (GNN), responsible for distributing base points. Base points are using the EVM implementation of IPSP and are designated as the Newcoin\'s official aggregate of all the points in the index, in the same way as Uniswap has base currencies like ETH, DAI or USDT to establish trading pairs.","sidebar":"tutorialSidebar"},"core-concepts/WATT":{"id":"core-concepts/WATT","title":"WATT","description":"Introduction","sidebar":"tutorialSidebar"},"getting-started/creating-watts/activation-function-approval":{"id":"getting-started/creating-watts/activation-function-approval","title":"Approval by the Foundation","description":"Once an activation function is proposed and registered, the Newcoin Foundation reviews and approves it before it can be activated. This centralized approval process ensures that the activation functions meet the foundation\u2019s standards and objectives, allowing them to operate in a permissionless and trusted manner once approved. The intention is for this process to become decentralized over time, with approvals managed through a foundation voting mechanism."},"getting-started/creating-watts/activation-function-interface":{"id":"getting-started/creating-watts/activation-function-interface","title":"Activation Functions Interface","description":"Overview"},"getting-started/creating-watts/activation-function-logic":{"id":"getting-started/creating-watts/activation-function-logic","title":"Activation Functions Logic","description":"Writing the Vote Contract"},"getting-started/creating-watts/call-activate":{"id":"getting-started/creating-watts/call-activate","title":"User Runs Activate Function","description":"User Runs Activate Function on Encoder and Submits ID of Approved Activation Function"},"getting-started/creating-watts/register-activation-function":{"id":"getting-started/creating-watts/register-activation-function","title":"Register Activation Function","description":"Overview"},"getting-started/overview":{"id":"getting-started/overview","title":"Overview","description":"In this tutorial, we\'ll walk through the process of creating an activation function within the Newcoin ecosystem. Our primary example will center on a simple voting mechanism that allows users to generate WATTs by upholding specific conditions."},"getting-started/using-watts/ethersjs":{"id":"getting-started/using-watts/ethersjs","title":"Using Ethers js","description":""},"getting-started/using-watts/onchain":{"id":"getting-started/using-watts/onchain","title":"Onchain Directly","description":""},"getting-started/using-watts/querying-watts":{"id":"getting-started/using-watts/querying-watts","title":"Querying WATT Balance","description":"After WATTs are issued to users, developers and applications may want to query and ascertain the amount of WATTs associated with a particular account. The WATTs provide insights into the algorithmic identity, reputation, and influence of the user across various platforms.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/implementing-function-oracle":{"id":"guides/gitcoin-chainlink-guild/implementing-function-oracle","title":"Step 2: Implementing Activation Function and Oracle Request Logic","description":"In this step, we\'ll outline how to implement the activation function and how to utilize Chainlink Oracles to perform an API request to Guild.xyz. The process includes sending a request, handling the response, and communicating back to the Encoder.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/introduction":{"id":"guides/gitcoin-chainlink-guild/introduction","title":"Introduction","description":"In this guide we are going to create an Activation Function that registers a certain degree of proof of humanity.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/registering-the-function":{"id":"guides/gitcoin-chainlink-guild/registering-the-function","title":"Step 4: Interacting with the Encoder and Activating the Function","description":"Once the activation function has been implemented and deployed, the next step is to interact with the Newcoin Encoder to register and activate the function, thereby minting WATTs upon successful condition checks.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/securing-the-contract":{"id":"guides/gitcoin-chainlink-guild/securing-the-contract","title":"Step 3: Ensuring Secure and Efficient Contract Operation","description":"This step will focus on ensuring that the contract is securely configured and provides the necessary functionality for efficient operation. This includes ensuring only the contract owner can modify critical parameters and allowing the owner to withdraw LINK tokens from the contract.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/stubbing-the-contract":{"id":"guides/gitcoin-chainlink-guild/stubbing-the-contract","title":"Step 1: Stubbing the Contract","description":"A. Define the Activation Function Interface","sidebar":"tutorialSidebar"},"guides/joke-vote-race/introduction":{"id":"guides/joke-vote-race/introduction","title":"Introduction","description":"In this guide, we\'re going to create an Activation Function that registers a user with a successful vote on a Jokerace contest in order to register the user with WATTS.","sidebar":"tutorialSidebar"},"guides/joke-vote-race/joke-and-checker":{"id":"guides/joke-vote-race/joke-and-checker","title":"joke-and-checker","description":"Step 2: Interacting with JokeVote using VoteChecker","sidebar":"tutorialSidebar"},"guides/joke-vote-race/joke-vote":{"id":"guides/joke-vote-race/joke-vote","title":"joke-vote","description":"Step 1: Setting Up the JokeVote Contract","sidebar":"tutorialSidebar"},"guides/joke-vote-race/testing":{"id":"guides/joke-vote-race/testing","title":"testing","description":""},"intro":{"id":"intro","title":"Introducing Newcoin For Developers","description":"Newcoin is an Agent Graph Protocol designed to establish contextual trust between agents based on the aggregation of feedback based on past interactions. Most of the internet is composed of weighted directed graphs which represent interaction histories: the likes of your social media post, the reviews your business has on Google Maps, the amount of links that a web page receives on Google Search, the feedback you give to ChatGPT after an inference. Those objects are used by machine learning to predict the next piece of content, who to tag, the next token. This prediction capability is currently siloed within separate systems trying to achieve similar things. With Newcoin we are providing a computing substrate for all networks to communicate and exchange insights with a shared language.","sidebar":"tutorialSidebar"},"newkamoto-consensus/base-points-registry":{"id":"newkamoto-consensus/base-points-registry","title":"base-points-registry","description":"| \u26a1\ufe0f WATT | The overarching aggregate powered by the Proof-of-Creativity algorithm which is composed of all the aggregates below and provides a holistic representation of a blockchain wallet based on their merits. The WATT is a unit of creative energy that compounds across a wide diversity of networks, be it blockchain networks, social networks, and algorithms that have been curated and weighted by the entire decentralized ecosystem. |"}}}')}}]);