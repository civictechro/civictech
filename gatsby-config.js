module.exports = {
  siteMetadata: {
    title: 'Civictech România',
    description: 'Împreună continuăm digitalizarea serviciilor destinate cetățenilor',
    author: '@civictechro',
    banner: `${__dirname}/static/images/civictech-banner.jpg`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['400', '700'],
            subsets: ['latin', 'latin-ext'],
          },
          {
            family: 'Noto Serif',
            variants: ['700'],
            subsets: ['latin', 'latin-ext'],
          },
        ],
        formats: ['woff', 'woff2'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'civictech',
        short_name: 'civictech',
        start_url: '/',
        background_color: '#009999',
        theme_color: '#009999',
        display: 'minimal-ui',
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
    'gatsby-plugin-sass',
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
