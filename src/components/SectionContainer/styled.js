import styled, { css } from "styled-components"

import { colors, radius } from "../../styles/tokens"

const topRadius = css`
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 10px;
    background-color: ${colors.dark};
    border-bottom-left-radius: ${radius.borderRadiusMedium};
    border-bottom-right-radius: ${radius.borderRadiusMedium};
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
    border-top-left-radius: ${radius.borderRadiusMedium};
    border-top-right-radius: ${radius.borderRadiusMedium};
  }
`

export const Content = styled.div`
  background-color: ${colors.white};
  border-radius: ${radius.borderRadiusMedium};

  ${({ curvedTop }) => curvedTop && topRadius}
  ${({ curvedBottom }) => curvedBottom && bottomRadius}
`
