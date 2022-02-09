module.exports = {
  siteMetadata: {
      title: `snh48xyz`,
      siteUrl: `https://snh48.xyz`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: process.env.TYPEKIT_ID,
      },
    },
  },
  'gatsby-plugin-postcss',
  `gatsby-plugin-no-index`, // prevent site from being indexed by search engines
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      purgeCSSOptions: {
        // https://purgecss.com/configuration.html#options
        // safelist: ['safelist'], // Don't remove this selector
        develop: true,
        printRejected: true,
        tailwind: true
      },
      // More options defined here https://purgecss.com/configuration.html#options
    },
  }
]
};