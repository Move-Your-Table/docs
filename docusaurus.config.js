// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Move Your Table',
  tagline: 'The ultimate Hybrid Work Management Tool',
  url: 'https://move-your-table.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/myt.png',
  organizationName: 'move-your-table', // Usually your GitHub org/user name.
  projectName: 'docs',
  trailingSlash: false, // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "https://github.com/Move-Your-Table/docs/tree/main",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-user',
        path: 'docs-user',
        routeBasePath: 'docs-user',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: "https://github.com/Move-Your-Table/docs/tree/main",
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-admin',
        path: 'docs-admin',
        routeBasePath: 'docs-admin',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: "https://github.com/Move-Your-Table/docs/tree/main",
      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Move Your Table',
        logo: {
          alt: 'MYT Logo',
          src: 'img/myt.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs-user/Intro',    // ./docs-api/Intro.md
            label: 'User Manual',
            position: 'left',
            activeBaseRegex: `/docs-user/`,
          },
          {
            to: '/docs-admin/Intro',  // ./docs-system/Intro.md
            label: 'Admin Manual',
            position: 'left',
            activeBaseRegex: `/docs-system/`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Technical Manual',
                to: '/docs/docs/intro',
              },
              {
                label: 'User Manual',
                to: '/docs/docs-user/intro'
              },
              {
                label: 'Admin Manual',
                to: '/docs/docs-admin/intro'
              }
            ],
          },
          {
            'title': 'Deployments',
            'items': [
              {
                label: 'Main Application',
                href: 'https://move-your-table-main.herokuapp.com/'
              },
              {
                label: 'Documentation Server',
                href: 'https://move-your-table-docs.herokuapp.com/'
              }
            ]
          },
          {
            title: 'Code',
            items: [
              {
                label: 'Automate Server',
                href: 'https://github.com/Move-Your-Table/automation-api',
              },
              {
                label: 'Back-end Server',
                href: 'https://github.com/Move-Your-Table/back-end',
              },
              {
                label: 'Front-end application',
                href: 'https://github.com/Move-Your-Table/front-end',
              },
              {
                label: 'Gateway Server',
                href: 'https://github.com/Move-Your-Table/gateway'
              },
              {
                label: 'Mobile Application',
                href: 'https://github.com/Move-Your-Table/mobile'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitLab',
                href: 'https://github.com/Move-Your-Table',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Move Your Table, Inc. Built & written by Bo Robbrecht with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
