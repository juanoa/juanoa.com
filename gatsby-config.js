module.exports = {
  siteMetadata: {
    title: `Juan Otálora Alarcón`,
    description: `La vida de un ingeniero informático como yo no es nada fácil. Me gusta leer, retener y escribir sobre temas que me gustan. ¿Me lees?`,
    author: `@juanoa`,
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
        apiURL: 'https://api-juanoa.herokuapp.com',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'post',
          'category'
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e9e9e9`,
        theme_color: `#5564eb`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },

    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
