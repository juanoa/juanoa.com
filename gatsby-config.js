require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Juan Otálora`,
    description: `La vida de un ingeniero informático como yo no es nada fácil. Me gusta leer, retener y escribir sobre temas que me gustan. ¿Me lees?`,
    author: `@juanoa_`,
    siteUrl: `https://www.juanoa.com`,
    startYear: '2018',
    social: [
      {
        name: 'GitHub',
        link: 'https://github.com/juanoa',
        icon: 'FaGithub'
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/juanoa_',
        icon: 'FaTwitter'
      },
      {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/juanoa',
        icon: 'FaLinkedin'
      },
      {
        name: 'Goodreads',
        link: 'https://goodreads.com/juanoa',
        icon: 'FaGoodreads'
      },
      {
        name: 'Medium',
        link: 'https://juanoa.medium.com/',
        icon: 'FaMedium'
      },
    ],
    footerLinks: {
      es: [
        {name: 'Sobre mi', url: '/'},
        {name: 'Blog', url: '/blog/'},
        {name: 'Proyectos', url: '/proyectos/'},
        {name: 'Contacto', url: '/contacto/'},
        {name: 'Política de privacidad', url: '/politica-privacidad/'},
      ],
      en: [
        {name: 'About me', url: '/en/'},
        {name: 'Blog', url: '/en/blog/'},
        {name: 'Projects', url: '/en/projects/'},
        {name: 'Contact', url: '/en/contact/'},
        {name: 'Privacy policy (ES)', url: '/politica-privacidad/'},
      ]
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 1000,
        collectionTypes: [
          {
            name: `post`,
            api: { qs: { _locale: 'all' } }
          },
          {
            name: `category`,
            api: { qs: { _locale: 'all' } }
          },
          {
            name: `book`,
            api: { qs: { _locale: 'all' } }
          },
          {
            name: `jobs`,
            api: { qs: { _locale: 'all' } }
          },
          {
            name: `projects`,
            api: { qs: { _locale: 'all' } }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juan Otálora Alarcón`,
        short_name: `juanoa.com`,
        description: `Blog de un ingeniero informático`,
        start_url: `/`,
        background_color: `#e9e9e9`,
        theme_color: `#5564eb`,
        display: `minimal-ui`,
        icon: `src/images/manifest/icon-512x512.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/manifest/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/images/manifest/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `src/images/manifest/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `src/images/manifest/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },

    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-127569865-1`, // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-sass`,
  ],
}
