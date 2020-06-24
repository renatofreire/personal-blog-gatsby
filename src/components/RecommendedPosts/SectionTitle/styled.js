import styled from "styled-components"

import colors from "../../../styles/colors"
import fonts from "../../../styles/fonts"

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

export const TitleText = styled.p`
  font: ${fonts.title};
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.dark};
  background-color: ${colors.white};
  padding: 0 1em;
  z-index: 1;
`

export const Line = styled.div`
  position: absolute;
  left: 0;
  bottom: 50%;
  width: 100%;
  height: 1px;
  background-color: ${colors.brand2};
  z-index: 0;
`
