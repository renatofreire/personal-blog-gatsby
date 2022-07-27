import styled from "styled-components"

import CategoryBadgeComponent from "../CategoryBadge"
import TitleComponent from "../Title"

export const Content = styled.div`
  margin-bottom: 2em;
  background-color: var(--color-background-level2);
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
  overflow: hidden;
`

export const Title = styled(TitleComponent)`
  background-color: var(--color-background-level1);
  font-size: 1.3em;
`

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CategoryBadge = styled(CategoryBadgeComponent)`
  margin-right: 0.5em;
`

export const Category = styled.p`
  color: ${({ color }) => `var(--${color})`};
`

export const Description = styled.p`
  font: var(--font-text);
  color: var(--color-font-text);
  padding: 1em;
`
