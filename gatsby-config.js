require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Juan Otálora Alarcón`,
    description: `La vida de un ingeniero informático como yo no es nada fácil. Me gusta leer, retener y escribir sobre temas que me gustan. ¿Me lees?`,
    author: `@juanoa_`,
    siteUrl: `https://www.juanoa.com`,
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
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'post',
          'category',
          'book',
          'jobs',
          'projects'
        ],
        queryLimit: 1000,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      exclude: [
        `/politica-privacidad`,
      ],
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `UA-127569865-1`, // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
