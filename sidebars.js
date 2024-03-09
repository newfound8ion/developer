// @ts-check

const sidebars = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "core-concepts/ipsp",
        "core-concepts/WATT",
        "core-concepts/neural-tokens",
        "core-concepts/encoder",
        "core-concepts/activation-function",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/overview",
        {
          type: "category",
          label: "Creating Watts",
          items: [
            "getting-started/creating-watts/activation-function-interface",
            "getting-started/creating-watts/activation-function-logic",
            "getting-started/creating-watts/register-activation-function",
            "getting-started/creating-watts/activation-function-approval",
            "getting-started/creating-watts/call-activate",
          ],
        },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/overview",
        {
          type: "category",
          label: "Creating Watts",
          items: [
            "getting-started/creating-watts/activation-function-interface",
            "getting-started/creating-watts/activation-function-logic",
            "getting-started/creating-watts/register-activation-function",
            "getting-started/creating-watts/activation-function-approval",
            "getting-started/creating-watts/call-activate",
          ],
        },
        {
          type: "category",
          label: "Using Watts",
          items: [
            "getting-started/using-watts/querying-watts",
            // "getting-started/using-watts/onchain",
            // "getting-started/using-watts/ethersjs",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "category",
          label: "Gitcoin, Guild.xyz and Chainlink",
          items: [
            "guides/gitcoin-chainlink-guild/introduction",
            "guides/gitcoin-chainlink-guild/stubbing-the-contract",
            "guides/gitcoin-chainlink-guild/implementing-function-oracle",
            "guides/gitcoin-chainlink-guild/securing-the-contract",
            "guides/gitcoin-chainlink-guild/registering-the-function",
          ],
        },
        {
          type: "category",
          label: "Jokerace Vote Checker",
          items: [
            "guides/joke-vote-race/introduction",
            "guides/joke-vote-race/joke-vote",
            "guides/joke-vote-race/joke-and-checker",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
