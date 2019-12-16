/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`
  ],
}