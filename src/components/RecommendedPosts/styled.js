import styled from "styled-components"

import { darkTheme } from "../../styles/tokens"

import Title from "../Title"
import Button from "../Button"

const {colors, fonts, radius, shadows} = darkTheme

export const Container = styled.div``

export const SectionTitle = styled(Title)`
  background-color: ${colors.backgrounds.base};
  margin-bottom: 1em;
`

export const RecommendedPosts = styled.div`
  display: grid;
  grid-gap: 2em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  overflow: hidden;
  background-color: ${colors.backgrounds.level2};
  border-radius: ${radius.small};
  box-shadow: ${shadows.default};
`

export const PostTitle = styled(Title)`
  font-size: 1em;
`
export const PostInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PostDate = styled.p`
  font: ${fonts.infos};
  color: ${colors.fonts.info};
  margin: 0 1em;

  @media (max-width: 500px) {
    margin-top: 1em;
  }
`

export const PostExcerpt = styled.p`
  font: ${fonts.text};
  color: ${colors.fonts.text};
  padding: 0 1em;
`

export const LinkContainer = styled.div``

export const Link = styled(Button)`
  width: 1fr;
  margin: 1em;
`
