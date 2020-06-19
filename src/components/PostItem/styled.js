import styled from "styled-components"
import { Link } from "gatsby"

import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

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

  margin-top: 100px;

  @media (min-width: 800px) {
    grid-template:
      "title title title title"
      "image content content content "
      "tags tags tags link";
  }
`

export const Title = styled(TitleComponent)`
  grid-area: title;
`
export const CoverImage = styled.img`
  grid-area: image;

  @media (max-width: 799px) {
    justify-self: center;
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

export const CategoryContainer = styled.div`
  font: ${fonts.text};
  display: flex;
  align-items: center;
`

export const Category = styled.p`
  color: ${({ color }) => color};
  font-weight: bold;
  margin-left: 0.5em;
`

export const Date = styled.time`
  font: ${fonts.infos};
  color: ${colors.font};
`

export const Excerpt = styled.p`
  font: ${fonts.text};
`

export const TagsContainer = styled.div`
  grid-area: tags;
`

export const TagsTitle = styled.p`
  font: ${fonts.text};
  color: ${colors.dark};
  font-weight: bold;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TagItem = styled.li`
  font: ${fonts.infos};
  color: ${colors.brand3};
  margin: 0.5em 0;

  &:after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: ${colors.font};
    border-radius: 5px;
    margin: 0px 0.5em;
    display: inline-block;
    vertical-align: middle;
  }

  &:last-child:after {
    display: none;
  }
`

export const PostLink = styled(Link)`
  grid-area: link;
  height: 2em;
  color: ${colors.dark};
  font-family: ${fonts.infos};
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
