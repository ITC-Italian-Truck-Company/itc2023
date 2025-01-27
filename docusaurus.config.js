import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LA FENICE ITALIANA',
  favicon: 'https://cdn.discordapp.com/attachments/1205832593744859156/1329533853945303132/fenixgold.png?ex=678ea4e4&is=678d5364&hm=dba6327096236b78d0111fefd992d206e91722dbe14a3151737676128501389a&?width=800&height=800',

  // Set the production url of your site here
  url: 'https://lfi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lfi/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'La Fenice Italiana', // Usually your GitHub org/user name.
  projectName: 'LFI-WebSite', // Usually your repo name.

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
          src: 'https://cdn.discordapp.com/attachments/1205832593744859156/1329533853945303132/fenixgold.png?ex=678ea4e4&is=678d5364&hm=dba6327096236b78d0111fefd992d206e91722dbe14a3151737676128501389a&?width=50&height=50',
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
            label: 'LFI BLOG',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'TruckersMP VTC',
                href: 'https://truckersmp.com/vtc/77372',
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