import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"

import Container from "../styles/container"

const TitleRow = styled.div`
  background-color: var(--color-background-jumboTitle);
  padding: 5em 0;
  box-shadow: var(--shadow-default);
`

const Title = styled.h1`
  font: var(--font-title);
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-font-jumboTitle);
`

const TextContainer = styled.div`
  margin: 2em 0;
`

const Content = styled(Container)`
  box-sizing: border-box;
  background-color: var(--color-background-level2);
  padding: 1em;
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
`

const Text = styled.p`
  font: var(--font-text);
  color: var(--color-font-text);
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
      <SEO
        title="Página não encontrada"
        description={
          "Essa página é exibida quando a página que você procurava não é encontrada, mas você pode acessar outro conteúdo interessante vendo os posts mais recentes ou navegando pelas categorias."
        }
      />
      <TitleRow>
        <Container>
          <Title>Essa página não existe</Title>
        </Container>
      </TitleRow>

      <TextContainer>
        <Content>
          <Text>Não encontrei a página que você está procurando.</Text>
          <Text>
            Você pode <s>pesquisar por algum assunto no blog</s>(
            <em>em breve</em>
            ), ou ler um dos posts mais recentes.
          </Text>
          <Text>Se você preferir, também pode navegar pelas categorias.</Text>
        </Content>
      </TextContainer>

      <Container>
        <RecommendedPosts title="posts recentes" postsList={recentPosts} />
      </Container>
    </Layout>
  )
}
export default NotFoundPage
