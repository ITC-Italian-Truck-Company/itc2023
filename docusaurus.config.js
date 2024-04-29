import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ITALIAN TRUCK COMPANY 2023',
  favicon: 'https://cdn.discordapp.com/attachments/1198249432290959461/1202744909967396964/logo_server.png?ex=65ce927c&is=65bc1d7c&hm=e5abd49358a9e0def75447d8d5d3d9a2b9534315d936e5013313c0e1d1d8e52a&/favicon.png?width=800&height=800',

  // Set the production url of your site here
  url: 'https://italiantruckcompany.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/itc2023/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Italian Truck Company', // Usually your GitHub org/user name.
  projectName: 'ITC-WebSite', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HOMEPAGE',
        logo: {
          src: 'https://cdn.discordapp.com/attachments/1198249432290959461/1202744909967396964/logo_server.png?ex=65ce927c&is=65bc1d7c&hm=e5abd49358a9e0def75447d8d5d3d9a2b9534315d936e5013313c0e1d1d8e52a&/favicon.png?width=50&height=50',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'TUTORIAL',
          },
          {
            to: '/blog',
            label: 'ITC BLOG',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Streamer Ufficiali',
            items: [
              {
                label: 'Bitpredator',
                href: 'https://www.twitch.tv/bitpredator',
              },
              {
                label: 'spada_fighter',
                href: 'https://www.twitch.tv/spada_fighter',
              },
              {
                label: 'robby__25',
                href: 'https://www.twitch.tv/robby__25',
              },
              {
                label: 'spumeggiante75',
                href: 'https://www.twitch.tv/spumeggiante75',
              },
              {
                label: 'italiantruckcompany2023',
                href: 'https://www.twitch.tv/italiantruckcompany2023',
              },
              {
                label: 'Yana_PewYT',
                href: 'https://www.twitch.tv/yana_pewyt',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'TruckersMP VTC',
                href: 'https://truckersmp.com/vtc/60781',
              },
              {
                label: 'TrucksBook',
                href: 'https://trucksbook.eu/company/168755',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/9vCpUQpXrC',
              },
            ],
          },
          {
            title: 'Sviluppatore',
            items: [
              {
                label: 'Bitpredator',
                href: 'https://github.com/bitpredator',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Italian Truck Company`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;