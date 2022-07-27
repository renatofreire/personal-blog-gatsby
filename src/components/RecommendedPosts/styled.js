import styled from "styled-components"

import Title from "../Title"
import Button from "../Button"

export const Container = styled.div``

export const SectionTitle = styled(Title)`
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
  background-color: var(--color-background-level2);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
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
  font: var(--font-infos);
  color: var(--color-font-info);
  margin: 0 1em;

  @media (max-width: 500px) {
    margin-top: 1em;
  }
`

export const PostExcerpt = styled.p`
  font: var(--font-text);
  color: var(--color-font-text);
  padding: 0 1em;
`

export const LinkContainer = styled.div``

export const Link = styled(Button)`
  width: 1fr;
  margin: 1em;
`
