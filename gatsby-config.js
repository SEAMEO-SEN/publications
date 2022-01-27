module.exports = {
  siteMetadata: {
    siteUrl: `https://publication.seameosen.org`,
    title: `SEAMEO SEN Publication`,
    description: `SEAMEO SEN Publication Page`,
    author: `@hurtsky`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SEAMEO SEN Publication Site`,
        short_name: `SEAMEOSEN`,
        start_url: `/`,
        lang: `en`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/seameosenIcon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto Slab",
              variants: ["400", "500"],
              //subsets: ['latin']
              //text: 'Hello'
              fontDisplay: "swap",
              strategy: "selfHosted", // 'base64' || 'cdn'
            },
          ],
        },
        formats: ["woff"],
        useMinify: true,
        usePreload: true,
        //usePreconnect: false,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://tracker.seameosen.edu.my",
        siteUrl: "https://publication.seameosen.org",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ["/category/*", `/path/to/page`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://publication.seameosen.org`,
        sitemap: `https://publication.seameosen.org/sitemap.xml`,
        policy: [
          {
            userAgent: `Googlebot`,
            allow: `/`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
