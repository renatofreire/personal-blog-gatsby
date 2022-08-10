import React from "react"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"

import Layout from "../components/new/NewLayout"
import SEO from "../components/seo"
import Title from "../components/Title"
import SocialLinks from "../components/SocialLinks"
import Sidebar from "../components/new/Sidebar"

import PageContainer from "../styles/container"

const Page = styled(PageContainer)`
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  margin-top: 2em;
  background-color: var(--color-background-level2);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
`

const Content = styled.div`
  padding: 1em;
`

const Text = styled.p`
  font: var(--font-text);
  color: var(--color-font-text);
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

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="NEWHOME" />

      <p>NEWHOME</p>
    </Layout>
  )
}

export default IndexPage
