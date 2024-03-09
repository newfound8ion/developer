// @ts-check

const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "core-concepts/agents",
        "core-concepts/ipsp",
        "core-concepts/newkamoto-consensus",
        "core-concepts/WATT", // If the file is named 'WATT.md', this is correct. If it's 'watt.md', use lowercase.
        "core-concepts/base-points",
      ],
    },
    {
      type: "category",
      label: "Using Watts",
      items: [
        "getting-started/using-watts/querying-watts",
        // Uncomment the following lines if the pages exist
        // "getting-started/using-watts/onchain",
        // "getting-started/using-watts/ethersjs",
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
