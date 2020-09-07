import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Container from "../styles/container"
import categoriesInfo from "../utils/categories-info"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import CategoryHeader from "../components/CategoryHeader"
import Pagination from "../components/Pagination"

const PageContainer = styled(Container)`
  padding-top: 2em;
`

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numberOfPages, categoryId } = props.pageContext

  const category = categoriesInfo(categoryId)

  return (
    <Layout>
      <SEO title={category.label} description={category.description} />
      <PageContainer>
        <CategoryHeader category={category} />

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
          context={category.slug}
        />
      </PageContainer>
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
