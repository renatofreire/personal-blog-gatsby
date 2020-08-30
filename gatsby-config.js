module.exports = {
  siteMetadata: {
    title: `Renato Freire - Blog`,
    description: `Olá! Este é meu blog pessoal, onde escrevo sobre desenvolvimento web e mobile`,
    siteUrl: `https://renatofreire.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts-images`,
        path: `${__dirname}/posts/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end_excerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 980,
              linkImagesToOriginal: false,
              quality: 100,
              wrapperStyle: `margin: 0.5em 0;`,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Renato Freire - Blog`,
        short_name: `Renato Ffreire`,
        description: `Olá! Este é meu blog pessoal, onde escrevo sobre desenvolvimento web e mobile`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#73e3e8`,
        icon: `src/images/placeholder.png`, // This path is relative to the root of the site.
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`, // To learn more, visit: https://gatsby.dev/offline
  ],
}
