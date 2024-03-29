import styled from "styled-components"
import { Link } from "gatsby"

import Button from "../Button"
import TitleComponent from "../Title"
import TagsContainerComponent from "../TagsContainer"

export const PostContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-level2);
  margin-bottom: 2em;
  overflow: hidden;
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
`

export const Title = styled(TitleComponent)`
  font-size: 1.3em;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TagsContainer = styled(TagsContainerComponent)`
  margin: 0 1em 0 0;

  @media (max-width: 799px) {
    margin: 0.5em 0 0 1em;
  }
`

export const ImageContainer = styled(Link)`
  display: flex;
  justify-content: center;
`

export const CoverImage = styled.img`
  width: 100%;
  max-width: 250px;

  @media (min-width: 800px) {
    width: 250px;
  }

  @media (min-width: 400px) {
    height: 250px;
  }
`

export const PostContent = styled.div`
  margin: 1em;
  display: flex;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  margin: 0 0 0 2em;

  @media (max-width: 799px) {
    margin: 2em 0 0 0;
  }
`

export const Date = styled.time`
  font: var(--font-infos);
  color: var(--color-font-info);
  margin-bottom: 1em;
  display: block;
`

export const Excerpt = styled.div`
  font: var(--font-text);
  color: var(--color-font-text);
`

export const PostLink = styled(Button)`
  margin: 1em;

  @media (min-width: 800px) {
    min-width: 250px;
    align-self: flex-end;
  }
`
