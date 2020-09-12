import styled from "styled-components"

import { colors, fonts, radius, shadows } from "../../styles/tokens"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 2em 0;
  background-color: ${colors.backgrounds.level2};
  border-radius: ${radius.small};
  box-shadow: ${shadows.default};

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Text = styled.p`
  font: ${fonts.text};
  color: ${colors.fonts.text};
  font-weight: bold;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 430px) {
    margin-top: 1em;
    align-self: flex-end;
  }
`

export const ShareLink = styled.a`
  margin-left: 2em;

  &:first-child {
    margin-left: 0;
  }
`
