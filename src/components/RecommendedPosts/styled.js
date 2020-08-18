import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

export const Container = styled.div`
  padding: 2em 1em 1em;
`

export const RecommendedPosts = styled.div`
  display: grid;
  grid-gap: 3em;
  margin-top: 2em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const PostContainer = styled.div`
  border: 1px solid ${colors.brand3};
  border-radius: 5px;
  padding: 0.5em;
`

export const PostTitle = styled(GatsbyLink)`
  display: block;
  font: ${fonts.title};
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.dark};
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${colors.brand3};
  transition: color 0.3s;

  &:hover {
    color: ${colors.link};
  }
`
export const PostInfos = styled.div`
  margin: 1em 0;

  @media (min-width: 400px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const PostCategory = styled.p`
  display: flex;
  align-items: center;
  font: ${fonts.text};
  font-weight: bold;
  color: ${({ color }) => color};

  span {
    margin-left: 0.5em;
  }
`

export const PostDate = styled.p`
  font: ${fonts.infos};
  color: ${colors.dark};

  @media (max-width: 399px) {
    margin-top: 0.5em;
  }
`

export const PostExcerpt = styled.p`
  font: ${fonts.text};
  font-size: 0.9em;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5em;
`

export const Link = styled(GatsbyLink)`
  font: ${fonts.text};
  color: ${colors.dark};
  text-decoration: none;
  transition: color 0.3s;

  &:after {
    content: "→";
    margin-left: 0.5em;
  }

  &:hover {
    color: ${colors.link};
  }
`
