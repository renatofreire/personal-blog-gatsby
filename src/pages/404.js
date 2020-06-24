import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"

import Container from "../styles/container"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

const TitleRow = styled.div`
  background-color: ${colors.brand2};
  padding: 5em 0;
`

const Title = styled.h1`
  font: ${fonts.title};
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.dark};
`

const TextContainer = styled.div`
  margin-top: 3em;
`

const Text = styled.p`
  font: ${fonts.text};
  color: ${colors.font};
  text-align: center;
  margin-bottom: 0.5em;
`

const NotFoundPage = () => {
  const {
    allMarkdownRemark: { edges: recentPosts },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 4
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                url
              }
              frontmatter {
                category
                date(locale: "pt-br", formatString: "DD/MM/YYYY")
                description
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Página não encontrada" />
      <TitleRow>
        <Container>
          <Title>Essa página não existe</Title>
        </Container>
      </TitleRow>

      <TextContainer>
        <Container>
          <Text>Não encontrei a página que você está procurando.</Text>
          <Text>
            Você pode <s>pesquisar por algum assunto no blog</s>(
            <em>em breve</em>
            ), ou ler um dos posts mais recentes.
          </Text>
          <Text>Se você preferir, também pode navegar pelas categorias.</Text>
        </Container>
      </TextContainer>

      <Container>
        <RecommendedPosts title="posts recentes" postsList={recentPosts} />
      </Container>
    </Layout>
  )
}
export default NotFoundPage
