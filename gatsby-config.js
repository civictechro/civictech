module.exports = {
  siteMetadata: {
    title: "CivicTech Romania",
    description:
      "Împreună continuam digitalizarea serviciilor destinate cetățenilor",
    author: "@civictechro",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Roboto",
            subsets: ["latin", "latin-ext"],
          },
          {
            family: "Noto Serif",
            variants: ["700"],
            subsets: ["latin", "latin-ext"],
          },
        ],
        formats: ["woff", "woff2"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "civictech",
        short_name: "civictech",
        start_url: "/",
        background_color: "#009999",
        theme_color: "#009999",
        display: "minimal-ui",
        icon: `${__dirname}/static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-fixhash`,
      options: {
        offsetY: 40, // number, optional offset
        scrollToOptions: {
          // see: https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions
          behavior: `smooth`,
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["PT Serif"],
        },
        custom: {
          families: ["Inter"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
