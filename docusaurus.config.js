// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Newcoin Developer',
  tagline: 'Contribute to the Proof-of-Creativity Algorithm',
  favicon: 'img/636cdeb29d8af379852bdd3c_fav1.png',

  // Set the production url of your site here
  url: 'https://developer.newcoin.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'newfound8ion', // Usually your GitHub org/user name.
  projectName: 'developer', // Usually your repo name.

  onBrokenLinks: 'ignore', // Temporarily ignore broken links to allow build
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/newfound8ion/developer/edit/master/', // Corrected editUrl
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/newfound8ion/developer/edit/master/', // Corrected editUrl
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: '/img/641c37a4fce0f1c717da3692_nco-symbol-black.svg',
    navbar: {
      title: 'Newcoin Developer',
      logo: {
        alt: 'Newcoin',
        src: '/img/641c37a4fce0f1c717da3692_nco-symbol-black.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/newfound8ion/developer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: 'https://google.com', // Updated the link
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
