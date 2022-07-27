import styled from "styled-components"
import { Link } from "gatsby"

import CategoryBadgeComponent from "../CategoryBadge"

export const CategoryContainer = styled(Link)`
  font: var(--font-text); 
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: var(--color-background-categoryLabel);
  padding: 0.3em 1em;
  transition: padding 0.3s, box-shadow 0.3s, background-color 0.3s;

  &:hover,
  &:active,
  &:focus {
    padding-left: 1.2em;
    padding-right: 0.8em;
    box-shadow: var(--shadow-hover);
    background-color: var(--color-background-categoryLabelHover);
  }
`

export const CategoryBadge = styled(CategoryBadgeComponent)`
  margin-right: 0.5em;
`
export const Category = styled.p`
  color: ${({ color }) => `var(--${color})`};
  font-weight: bold;
`
