// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MYT Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://move-your-table-docs.herokuapp.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Move Your Table', // Usually your GitHub org/user name.
  projectName: 'myt', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "https://git.ti.howest.be/TI/2021-2022/s5/trending-topics/projects/hybrid-work1/documentation/docs/"
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
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
          // TODO: Add new docs as for "User Manual" and "Admin Manual"
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
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
                label: 'Documentation',
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
                label: 'Blog',
                to: '/blog',
              },
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
