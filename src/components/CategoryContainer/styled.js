import styled from "styled-components"
import { Link } from "gatsby"

import { fonts } from "../../styles/tokens"

export const CategoryContainer = styled(Link)`
  font: ${fonts.text};
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const Category = styled.p`
  color: ${({ color }) => color};
  font-weight: bold;
  margin-left: 0.5em;
`
