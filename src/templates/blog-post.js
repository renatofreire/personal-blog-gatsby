import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import SharePost from "../components/SharePost"

import PageContainer from "../styles/container"

const TestPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, category, tags, description },
      fields: { url },
      html,
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
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
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query Post($id: String!) {
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
      }
      html
    }
  }
`

export default TestPage
