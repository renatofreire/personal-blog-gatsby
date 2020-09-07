import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Title from "../components/Title"
import SocialLinks from "../components/SocialLinks"

import PageContainer from "../styles/container"
import { colors, fonts, radius, shadows } from "../styles/tokens"

const Page = styled(PageContainer)`
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  margin-top: 2em;
  background-color: ${colors.backgrounds.level2};
  border-radius: ${radius.small};
  box-shadow: ${shadows.default};
`

const Content = styled.div`
  padding: 1em;
`

const Text = styled.p`
  font: ${fonts.text};
  color: ${colors.fonts.text};
  margin: 0em 0 2em;
`

const SocialLinksContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  justify-items: center;
  grid-template:
    "text"
    "links"
    "img";

  @media (min-width: 700px) {
    justify-items: flex-start;
    grid-template:
      "img text" auto
      "img links" 1fr;
  }
`
const SocialLinksText = styled(Text)`
  grid-area: text;
  margin-bottom: 0;
`

const Image = styled(Img)`
  width: 250px;
  grid-area: img;
`

const StyledSocialLinks = styled(SocialLinks)`
  grid-area: links;
  height: 50px;
`

const IndexPage = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Sobre" />
      <Page>
        <Container>
          <Title>Sobre esse blog</Title>
          <Content>
            <Text>
              Olá! Meu nome é Renato Freire e eu desenvolvo soluções em
              front-end e back-end. Gosto de adquirir novos conhecimentos, pois
              acredito que a solução para um problema está na união das
              informações certas. Para mim, a melhor forma de aprender é
              compartilhar o que foi aprendido, porque dessa forma podemos somar
              nossos conhecimentos e multiplicar os conhecimentos existentes no
              mundo.
            </Text>

            <Text>
              Acredito que o crescimento profissional e pessoal acontecem
              juntos, por isso estou sempre conversando com outras pessoas,
              estudando, fazendo cursos e lendo livros e publicações. Criei esse
              blog para poder registrar essas experiências profissionais e
              pessoais, falando sobre assuntos técnicos e não-técnicos, dessa
              forma, além de aprender também posso compartilhar o conhecimento
              com mais pessoas.
            </Text>

            <Text>
              Como pretendo registrar aqui o que estou estudando e vivenciando
              no mundo da tecnologia, encare meus posts como "anotações de
              estudo" ao invés de considerá-los como "palavra de especialista".
              Se você encontrar algum erro de conceito ou código, ou se você
              discordar de alguma ideia minha, converse comigo pelas redes
              sociais ou me mande um e-mail. Vou adorar conversar com você e
              debater algum assunto para expandirmos nossos conhecimentos.
            </Text>

            <SocialLinksContainer>
              <Image fluid={image.childImageSharp.fluid} />
              <SocialLinksText>
                Enfim, estou aberto para qualquer tipo de feedback, então aqui
                estão os links das minhas redes sociais:
              </SocialLinksText>

              <StyledSocialLinks iconSize={50} />
            </SocialLinksContainer>
          </Content>
        </Container>
      </Page>
    </Layout>
  )
}

export default IndexPage
