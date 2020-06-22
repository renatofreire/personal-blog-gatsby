import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Container from "../styles/container"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
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
      </Container>
    </Layout>
  )
}
export default IndexPage
