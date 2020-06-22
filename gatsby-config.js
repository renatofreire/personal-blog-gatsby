module.exports = {
  siteMetadata: {
    title: `Renato Freire - Blog`,
    description: `Olá! Este é meu blog pessoal, onde escrevo sobre desenvolvimento web e mobile`,
    author: `@renatofreire`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end_excerpt -->`,
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 980,
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-lazy-load",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `renatofreire-blog`,
        short_name: `renatofreire-blog`,
        description: `Olá! Este é meu blog pessoal, onde escrevo sobre desenvolvimento web e mobile`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#73e3e8`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
