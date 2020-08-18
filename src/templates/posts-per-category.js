import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../styles/container"
import categoriesInfo from "../utils/categories-info"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numberOfPages, categoryId } = props.pageContext

  const { slug, label } = categoriesInfo(categoryId)

  return (
    <Layout>
      <SEO title={label} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        {postList.map(
          ({
            node: {
              id,
              frontmatter: { title, category, date, tags, image, altImage },
              excerpt,
              fields: { url },
            },
          }) => (
            <PostItem
              key={id}
              title={title}
              category={category}
              date={date}
              image={image}
              altImage={altImage}
              excerpt={excerpt}
              tags={tags}
              url={url}
            />
          )
        )}
        <Pagination
          current={currentPage}
          numberOfPages={numberOfPages}
          context={slug}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query CategoryPostList($skip: Int!, $limit: Int!, $categoryId: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { category: { eq: $categoryId } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD/MM/YYYY")
            category
            tags
            image {
              publicURL
            }
            altImage
          }
          excerpt(format: HTML)
          fields {
            url
          }
        }
      }
    }
  }
`

export default BlogList
