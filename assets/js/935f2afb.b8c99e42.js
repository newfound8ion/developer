"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[53],{1109:t=>{t.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introducing Newcoin For Developers","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Core Concepts","items":[{"type":"link","label":"WATT","href":"/docs/core-concepts/WATT","docId":"core-concepts/WATT"},{"type":"link","label":"Neural Tokens","href":"/docs/core-concepts/neural-tokens","docId":"core-concepts/neural-tokens"},{"type":"link","label":"Encoder","href":"/docs/core-concepts/encoder","docId":"core-concepts/encoder"},{"type":"link","label":"Activation Function","href":"/docs/core-concepts/activation-function","docId":"core-concepts/activation-function"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Overview","href":"/docs/getting-started/overview","docId":"getting-started/overview"},{"type":"category","label":"Creating Watts","items":[{"type":"link","label":"Activation Functions Interface","href":"/docs/getting-started/creating-watts/activation-function-interface","docId":"getting-started/creating-watts/activation-function-interface"},{"type":"link","label":"Activation Functions Logic","href":"/docs/getting-started/creating-watts/activation-function-logic","docId":"getting-started/creating-watts/activation-function-logic"},{"type":"link","label":"Register Activation Function","href":"/docs/getting-started/creating-watts/register-activation-function","docId":"getting-started/creating-watts/register-activation-function"},{"type":"link","label":"Approval by the Foundation","href":"/docs/getting-started/creating-watts/activation-function-approval","docId":"getting-started/creating-watts/activation-function-approval"},{"type":"link","label":"User Runs Activate Function","href":"/docs/getting-started/creating-watts/call-activate","docId":"getting-started/creating-watts/call-activate"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Using Watts","items":[{"type":"link","label":"Querying WATT Balance","href":"/docs/getting-started/using-watts/querying-watts","docId":"getting-started/using-watts/querying-watts"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"category","label":"Gitcoin, Guild.xyz and Chainlink","items":[{"type":"link","label":"Introduction","href":"/docs/guides/gitcoin-chainlink-guild/introduction","docId":"guides/gitcoin-chainlink-guild/introduction"},{"type":"link","label":"Step 1: Stubbing the Contract","href":"/docs/guides/gitcoin-chainlink-guild/stubbing-the-contract","docId":"guides/gitcoin-chainlink-guild/stubbing-the-contract"},{"type":"link","label":"Step 2: Implementing Activation Function and Oracle Request Logic","href":"/docs/guides/gitcoin-chainlink-guild/implementing-function-oracle","docId":"guides/gitcoin-chainlink-guild/implementing-function-oracle"},{"type":"link","label":"Step 3: Ensuring Secure and Efficient Contract Operation","href":"/docs/guides/gitcoin-chainlink-guild/securing-the-contract","docId":"guides/gitcoin-chainlink-guild/securing-the-contract"},{"type":"link","label":"Step 4: Interacting with the Encoder and Activating the Function","href":"/docs/guides/gitcoin-chainlink-guild/registering-the-function","docId":"guides/gitcoin-chainlink-guild/registering-the-function"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Jokerace Vote Checker","items":[{"type":"link","label":"Introduction","href":"/docs/guides/joke-vote-race/introduction","docId":"guides/joke-vote-race/introduction"},{"type":"link","label":"joke-vote","href":"/docs/guides/joke-vote-race/joke-vote","docId":"guides/joke-vote-race/joke-vote"},{"type":"link","label":"joke-and-checker","href":"/docs/guides/joke-vote-race/joke-and-checker","docId":"guides/joke-vote-race/joke-and-checker"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true}]},"docs":{"core-concepts/activation-function":{"id":"core-concepts/activation-function","title":"Activation Function","description":"Introduction","sidebar":"tutorialSidebar"},"core-concepts/encoder":{"id":"core-concepts/encoder","title":"Encoder","description":"Introduction","sidebar":"tutorialSidebar"},"core-concepts/ipsp":{"id":"core-concepts/ipsp","title":"Immutable Points Standard Protocol (IPSP)","description":"Newcoin uses IPSP as a serialization and normalization layer between all the heterogenous value statements on the internet and the Agent Graph, representing agents by their DiDs, units of content are represented by Open Graph objects and edges are Immutable Points as described in the Immutable Points Standard Protocol, which itself is referencing standards from Verifiable Credentials, Activity Streams and Schema.org."},"core-concepts/neural-tokens":{"id":"core-concepts/neural-tokens","title":"Neural Tokens","description":"Introduction","sidebar":"tutorialSidebar"},"core-concepts/WATT":{"id":"core-concepts/WATT","title":"WATT","description":"Introduction","sidebar":"tutorialSidebar"},"getting-started/creating-watts/activation-function-approval":{"id":"getting-started/creating-watts/activation-function-approval","title":"Approval by the Foundation","description":"Once an activation function is proposed and registered, the Newcoin Foundation reviews and approves it before it can be activated. This centralized approval process ensures that the activation functions meet the foundation\u2019s standards and objectives, allowing them to operate in a permissionless and trusted manner once approved. The intention is for this process to become decentralized over time, with approvals managed through a foundation voting mechanism.","sidebar":"tutorialSidebar"},"getting-started/creating-watts/activation-function-interface":{"id":"getting-started/creating-watts/activation-function-interface","title":"Activation Functions Interface","description":"Overview","sidebar":"tutorialSidebar"},"getting-started/creating-watts/activation-function-logic":{"id":"getting-started/creating-watts/activation-function-logic","title":"Activation Functions Logic","description":"Writing the Vote Contract","sidebar":"tutorialSidebar"},"getting-started/creating-watts/call-activate":{"id":"getting-started/creating-watts/call-activate","title":"User Runs Activate Function","description":"User Runs Activate Function on Encoder and Submits ID of Approved Activation Function","sidebar":"tutorialSidebar"},"getting-started/creating-watts/register-activation-function":{"id":"getting-started/creating-watts/register-activation-function","title":"Register Activation Function","description":"Overview","sidebar":"tutorialSidebar"},"getting-started/overview":{"id":"getting-started/overview","title":"Overview","description":"In this tutorial, we\'ll walk through the process of creating an activation function within the Newcoin ecosystem. Our primary example will center on a simple voting mechanism that allows users to generate WATTs by upholding specific conditions.","sidebar":"tutorialSidebar"},"getting-started/using-watts/ethersjs":{"id":"getting-started/using-watts/ethersjs","title":"Using Ethers js","description":""},"getting-started/using-watts/onchain":{"id":"getting-started/using-watts/onchain","title":"Onchain Directly","description":""},"getting-started/using-watts/querying-watts":{"id":"getting-started/using-watts/querying-watts","title":"Querying WATT Balance","description":"After WATTs are issued to users, developers and applications may want to query and ascertain the amount of WATTs associated with a particular account. The WATTs provide insights into the algorithmic identity, reputation, and influence of the user across various platforms.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/implementing-function-oracle":{"id":"guides/gitcoin-chainlink-guild/implementing-function-oracle","title":"Step 2: Implementing Activation Function and Oracle Request Logic","description":"In this step, we\'ll outline how to implement the activation function and how to utilize Chainlink Oracles to perform an API request to Guild.xyz. The process includes sending a request, handling the response, and communicating back to the Encoder.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/introduction":{"id":"guides/gitcoin-chainlink-guild/introduction","title":"Introduction","description":"In this guide we are going to create an Activation Function that registers a certain degree of proof of humanity.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/registering-the-function":{"id":"guides/gitcoin-chainlink-guild/registering-the-function","title":"Step 4: Interacting with the Encoder and Activating the Function","description":"Once the activation function has been implemented and deployed, the next step is to interact with the Newcoin Encoder to register and activate the function, thereby minting WATTs upon successful condition checks.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/securing-the-contract":{"id":"guides/gitcoin-chainlink-guild/securing-the-contract","title":"Step 3: Ensuring Secure and Efficient Contract Operation","description":"This step will focus on ensuring that the contract is securely configured and provides the necessary functionality for efficient operation. This includes ensuring only the contract owner can modify critical parameters and allowing the owner to withdraw LINK tokens from the contract.","sidebar":"tutorialSidebar"},"guides/gitcoin-chainlink-guild/stubbing-the-contract":{"id":"guides/gitcoin-chainlink-guild/stubbing-the-contract","title":"Step 1: Stubbing the Contract","description":"A. Define the Activation Function Interface","sidebar":"tutorialSidebar"},"guides/joke-vote-race/introduction":{"id":"guides/joke-vote-race/introduction","title":"Introduction","description":"In this guide, we\'re going to create an Activation Function that registers a user with a successful vote on a Jokerace contest in order to register the user with WATTS.","sidebar":"tutorialSidebar"},"guides/joke-vote-race/joke-and-checker":{"id":"guides/joke-vote-race/joke-and-checker","title":"joke-and-checker","description":"Step 2: Interacting with JokeVote using VoteChecker","sidebar":"tutorialSidebar"},"guides/joke-vote-race/joke-vote":{"id":"guides/joke-vote-race/joke-vote","title":"joke-vote","description":"Step 1: Setting Up the JokeVote Contract","sidebar":"tutorialSidebar"},"guides/joke-vote-race/testing":{"id":"guides/joke-vote-race/testing","title":"testing","description":""},"intro":{"id":"intro","title":"Introducing Newcoin For Developers","description":"Newcoin is an Agent Graph Protocol designed to establish contextual trust between agents based on how feedback.","sidebar":"tutorialSidebar"},"ipsp/overview":{"id":"ipsp/overview","title":"Immutable Points Standard Protocol (IPSP)","description":"Newcoin uses IPSP as a serialization and normalization layer between all the heterogenous value statements on the internet and the Agent Graph, representing agents by their DiDs, units of content are represented by Open Graph objects and edges are Immutable Points as described in the Immutable Points Standard Protocol, which itself is referencing standards from Verifiable Credentials, Activity Streams and Schema.org."}}}')}}]);