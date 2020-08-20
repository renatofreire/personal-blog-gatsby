import styled from "styled-components"

import { fonts } from "../../styles/tokens"

export const Content = styled.div`
  padding: 1em;
`

export const CategoryContainer = styled.div`
  font: ${fonts.text};
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const Category = styled.p`
  color: ${({ color }) => color};
  font-weight: bold;
  margin-left: 0.5em;
  font-size: 1.5em;
`

export const Description = styled.p`
  font: ${fonts.text};
  margin-top: 0.5em;

  @media (min-width: 500px) {
    margin-left: 62px;
  }
`
