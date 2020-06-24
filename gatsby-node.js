const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// To add the url field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    const postFilePath = createFilePath({
      node,
      getNode,
    })

    //creating the url field
    createNodeField({
      node,
      name: "url",
      value: `/${postFilePath.slice(12)}`,
    })
  }
}

// to create pages dynamically
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            fields {
              url
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.url,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: node.id,
          url: node.fields.url,
        },
      })
    })

    // creating pages by pagination
    const postsPerPage = 5
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const currentPage = index + 1
      createPage({
        path: index === 0 ? "/" : `/${currentPage}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numberOfPages,
          currentPage,
        },
      })
    })
  })
}
