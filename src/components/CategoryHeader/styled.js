import styled from "styled-components"

import { colors, fonts, radius, shadows } from "../../styles/tokens"

import CategoryBadgeComponent from "../CategoryBadge"
import TitleComponent from "../Title"

export const Content = styled.div`
  margin-bottom: 2em;
  background-color: ${colors.font};
  border-radius: ${radius.borderRadiusSmall};
  box-shadow: ${shadows.default};
  overflow: hidden;
`

export const Title = styled(TitleComponent)`
  background-color: ${colors.dark};
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
  color: ${({ color }) => color};
`

export const Description = styled.p`
  font: ${fonts.text};
  color: ${colors.white};
  padding: 1em;
`
