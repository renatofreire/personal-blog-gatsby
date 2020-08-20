import styled from "styled-components"
import { Link } from "gatsby"

import { colors, fonts } from "../../styles/tokens"

import TitleComponent from "../Title"

export const PostContainer = styled.article`
  display: grid;
  grid-gap: 1em 2em;
  grid-template:
    "title"
    "image"
    "content"
    "tags"
    "link";

  padding: 2em 1em 1em;

  @media (min-width: 800px) {
    grid-template:
      "title title title title"
      "image content content content "
      "tags tags tags link";
  }
`

export const Title = styled(TitleComponent)`
  grid-area: title;
  font-size: 1.3em;
`

export const ImageContainer = styled(Link)`
  grid-area: image;
  display: flex;
  justify-content: center;

  @media (max-width: 799px) {
    justify-self: center;
  }
`

export const CoverImage = styled.img`
  max-width: 250px;

  @media (max-width: 799px) {
    width: 100%;
  }
`

export const PostContent = styled.div`
  grid-area: content;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5em 0 1.5em;
`

export const Date = styled.time`
  font: ${fonts.infos};
  color: ${colors.font};
`

export const Excerpt = styled.p`
  font: ${fonts.text};
`

export const PostLink = styled(Link)`
  grid-area: link;
  height: 2em;
  color: ${colors.dark};
  font: ${fonts.infos};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  border-radius: 5px;
  border: 2px solid ${colors.dark};
  padding: 0 2em;
  font-weight: bold;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.dark};
  }

  @media (max-width: 799px) {
    margin-top: 1em;
  }
`
