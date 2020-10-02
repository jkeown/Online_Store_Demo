/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: process.env.SNIP_KEY,
        js: "https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js",
        jquery: false,
        styles: "https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css"
      }
    },
    `gatsby-plugin-postcss`,
],
}
