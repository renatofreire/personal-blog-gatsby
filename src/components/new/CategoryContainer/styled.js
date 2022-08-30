import styled from "styled-components"
import { Link } from "gatsby"

import CategoryBadgeComponent from "../CategoryBadge"

export const CategoryContainer = styled(Link)`
  font: var(--font-text); 
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 0.3em 0.3em 0.3em 0;
  margin-top: 2em;
`

export const CategoryBadge = styled(CategoryBadgeComponent)`
  margin-right: 0.5em;
`
export const CategoryName = styled.p`
  color: var(--color-font-text);
  font-weight: bold;
`
