// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Move Your Table',
  tagline: 'The ultimate Hybrid Work Management Tool',
  url: 'https://move-your-table-docs.herokuapp.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/myt.png',
  organizationName: 'Move Your Table', // Usually your GitHub org/user name.
  projectName: 'myt', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/documentation/-/tree/main",
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
        editUrl: "https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/documentation/-/tree/main",
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-admin',
        path: 'docs-admin',
        routeBasePath: 'docs-admin',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: "https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/documentation/-/tree/main",
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
                to: '/docs/intro',
              },
              {
                label: 'User Manual',
                to: '/docs-user/intro'
              },
              {
                label: 'Admin Manual',
                to: '/docs-admin/intro'
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
                href: 'https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/automateapi',
              },
              {
                label: 'Back-end Server',
                href: 'https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/back-end',
              },
              {
                label: 'Front-end application',
                href: 'https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/front-end',
              },
              {
                label: 'Gateway Server',
                href: 'https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/gateway'
              },
              {
                label: 'Mobile Application',
                href: 'https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/mobile'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitLab',
                href: 'https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1',
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
