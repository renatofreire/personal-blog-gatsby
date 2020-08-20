import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { colors, fonts, radius } from "../../styles/tokens"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  background-color: #fff;
  border-radius: ${radius.borderRadiusMedium};
`

export const Text = styled.p`
  font: ${fonts.infos};
  font-weight: bold;
  color: ${colors.dark};
  margin: 0px 1em;
`

export const Link = styled(GatsbyLink)`
  padding: 0.5em 1em;
  border-radius: 5px;

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
  transform: rotate(45deg);
`

export const LeftArrow = styled(Arrow)`
  transform: rotate(-135deg);
`

export const NoLink = styled.span`
  padding: 0.5em 1em;
  cursor: not-allowed;
`
