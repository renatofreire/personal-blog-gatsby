import styled from "styled-components"

import { colors, fonts, radius } from "../../styles/tokens"

export const Container = styled.div`
  padding: 1em;
  background-color: ${colors.white};
  border-radius: ${radius.borderRadiusMedium};

  @media (min-width: 430px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const Text = styled.p`
  font: ${fonts.text};
  color: ${colors.black};
  font-weight: bold;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ShareLink = styled.a`
  margin-left: 2em;

  &:first-child {
    margin-left: 0;
  }
`
