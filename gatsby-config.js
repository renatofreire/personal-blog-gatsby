const siteDescription = `Este é o meu blog pessoal, onde escrevo sobre desenvolvimento de software com posts sobre front-end, back-end, mobile, gestão de projetos e carreira.`
const productionURL = `https://renatofreire.dev`

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = productionURL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const plugins = [
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
  `gatsby-plugin-catch-links`,
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
      short_name: `Renato Freire`,
      description: siteDescription,
      start_url: `/`,
      background_color: `#333333`,
      theme_color: `#333333`,
      icon: `src/images/placeholder.png`, // This path is relative to the root of the site.
      display: `minimal-ui`,
    },
  },
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      resolveEnv: () => NETLIFY_ENV,
      env: {
        production: {
          policy: [{ userAgent: "*", allow: "/" }],
        },
        "branch-deploy": {
          policy: [{ userAgent: "*", disallow: ["/"] }],
          sitemap: null,
          host: null,
        },
        "deploy-preview": {
          policy: [{ userAgent: "*", disallow: ["/"] }],
          sitemap: null,
          host: null,
        },
      },
    },
  },
  `gatsby-plugin-offline`, // To learn more, visit: https://gatsby.dev/offline
]

if (isNetlifyProduction) {
  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
      head: false,
    },
  }
  plugins.push(analytics)
  plugins.push(`gatsby-plugin-sitemap`)
}

module.exports = {
  siteMetadata: {
    title: `Renato Freire - Blog`,
    description: siteDescription,
    siteUrl,
  },
  plugins,
}
