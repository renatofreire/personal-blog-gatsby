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
