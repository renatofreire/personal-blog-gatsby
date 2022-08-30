import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Container from "../styles/container"

import Layout from "../components/new/Layout"
import SEO from "../components/seo"
import PostItem from "../components/new/PostItem"
import Pagination from "../components/new/Pagination"

const PageContainer = styled(Container)`
  padding-top: 5em;
`

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numberOfPages } = props.pageContext

  return (
    <Layout>
      <SEO title={`Home ${currentPage > 1 ? `[${currentPage}]` : ""}`} />
      <PageContainer>
        {postList.map(
          ({
            node: {
              id,
              frontmatter: { title, category, date, updatedAt, tags, image, altImage },
              excerpt,
              fields: { url },
            },
          }) => (
            <PostItem
              key={id}
              title={title}
              category={category}
              date={date}
              updatedAt={updatedAt}
              image={image}
              altImage={altImage}
              excerpt={excerpt}
              tags={tags}
              url={url}
            />
          )
        )}
        <Pagination current={currentPage} numberOfPages={numberOfPages} />
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD/MM/YYYY")
            updatedAt(locale: "pt-br", formatString: "DD/MM/YYYY")
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
