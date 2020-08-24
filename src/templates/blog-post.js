import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import SharePost from "../components/SharePost"
import RecommendedPosts from "../components/RecommendedPosts"

import PageContainer from "../styles/container"

const PostPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, category, tags, description, image },
      fields: { url },
      html,
    },
    allMarkdownRemark: { edges: relatedPosts },
  } = data

  const hasRelatedPosts = relatedPosts.length > 1

  return (
    <Layout>
      <SEO title={title} description={description} image={image} />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <PageContainer>
        <Post
          title={title}
          tags={tags}
          category={category}
          date={date}
          content={html}
          url={url}
          description={description}
        />

        <SharePost postURL={url} postTitle={title} />
        {hasRelatedPosts && (
          <RecommendedPosts
            curvedTop
            title="posts relacionados"
            postsList={relatedPosts}
          />
        )}
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!, $category: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        url
      }
      frontmatter {
        category
        date(locale: "pt-br", formatString: "DD/MM/YYYY")
        tags
        title
        description
        image {
          publicURL
        }
      }
      html
    }
    allMarkdownRemark(
      limit: 2
      filter: { id: { ne: $id }, frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          fields {
            url
          }
          frontmatter {
            title
            category
            date(locale: "pt-br", formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`

export default PostPage
