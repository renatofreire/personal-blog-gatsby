import styled from "styled-components"
import { Link } from "gatsby"

import CategoryBadgeComponent from "../CategoryBadge"
import { colors, fonts, shadows } from "../../styles/tokens"
import { lightenHexColor } from "../../utils/colors"

export const CategoryContainer = styled(Link)`
  font: ${fonts.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${colors.dark};
  padding: 0.3em 1em;
  transition: padding 0.3s, box-shadow 0.3s, background-color 0.3s;

  &:hover,
  &:active,
  &:focus {
    padding-left: 1.2em;
    padding-right: 0.8em;
    box-shadow: ${shadows.hover};
    background-color: ${lightenHexColor(colors.dark, 90)};
  }
`

export const CategoryBadge = styled(CategoryBadgeComponent)`
  margin-right: 0.5em;
`
export const Category = styled.p`
  color: ${({ color }) => color};
  font-weight: bold;
`
