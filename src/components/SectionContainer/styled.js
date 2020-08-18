import styled, { css } from "styled-components"

import colors from "../../styles/colors"
import sizing from "../../styles/sizing"

const topRadius = css`
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 10px;
    background-color: ${colors.dark};
    border-bottom-left-radius: ${sizing.sectionRadius};
    border-bottom-right-radius: ${sizing.sectionRadius};
  }
`

const bottomRadius = css`
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 10px;
    background-color: ${colors.dark};
    border-top-left-radius: ${sizing.sectionRadius};
    border-top-right-radius: ${sizing.sectionRadius};
  }
`

export const Content = styled.div`
  background-color: ${colors.white};
  border-radius: ${sizing.sectionRadius};

  ${({ curvedTop }) => curvedTop && topRadius}
  ${({ curvedBottom }) => curvedBottom && bottomRadius}
`
