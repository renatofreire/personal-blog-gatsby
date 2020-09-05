import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { colors, fonts, radius, shadows } from "../../styles/tokens"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  background-color: ${colors.font};
  border-radius: ${radius.borderRadiusSmall};
  box-shadow: ${shadows.default};
`

export const Text = styled.p`
  font: ${fonts.infos};
  font-weight: bold;
  color: ${colors.white};
  margin: 0px 1em;
`

export const Link = styled(GatsbyLink)`
  padding: 0.5em 1em;
  border-radius: ${radius.borderRadiusSmall};
  background-color: ${colors.brand2};

  &:hover {
    background-color: ${colors.codeBackground};
  }
`

const Arrow = styled.div`
  width: 0.5em;
  height: 0.5em;
  border-top-width: 2px;
  border-right-width: 2px;
  border-top-style: solid;
  border-right-style: solid;
  border-color: ${({ disabled }) =>
    disabled ? colors.lightGray : colors.dark};
`

export const RightArrow = styled(Arrow)`
  transform: translateX(-2px) rotate(45deg);
`

export const LeftArrow = styled(Arrow)`
  transform: translateX(2px) rotate(-135deg);
`

export const NoLink = styled.span`
  padding: 0.5em 1em;
  cursor: not-allowed;
  background-color: #999;
  border-radius: ${radius.borderRadiusSmall};
`
