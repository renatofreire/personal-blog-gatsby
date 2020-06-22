import styled from "styled-components"
import { Link } from "gatsby"

import PageContainer from "../../styles/container"
import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

import CategoryBadgeComponent from "../CategoryBadge"

export const Footer = styled.footer`
  margin-top: 2em;
`

export const CategoriesContainer = styled.div`
  padding: 0.5em 0;
  background-color: ${colors.dark};
`

export const CategoriesContent = styled(PageContainer)``

export const CategoryList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`

export const Category = styled.li`
  text-align: center;
  margin: 0.5em 0;

  @media (min-width: 800px) {
    margin: 0;
  }
`

export const CategoryLink = styled(Link)`
  font: ${fonts.text};
  color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 0 0.5em;
  text-decoration: none;
`

export const CategoryBadge = styled(CategoryBadgeComponent)`
  margin-right: 0.5em;
`

export const LinksContainer = styled.div`
  padding: 1em 0;
  background-color: ${colors.brand2};
`

export const LinksContent = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 1em;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`

export const SocialLinksText = styled.p`
  font: ${fonts.text};
  color: ${colors.dark};
  font-weight: bold;
  margin-right: 10px;
  text-align: center;
  margin-bottom: 0.5em;

  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`