import styled from "styled-components"

import fonts from "../../styles/fonts"

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
