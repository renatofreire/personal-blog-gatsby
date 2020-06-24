import styled from "styled-components"

import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

export const Container = styled.div`
  margin-top: 2em;

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
  margin: 1em 0;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ShareLink = styled.a`
    margin-left: 2em;
  
  &:first-child{
    margin-left: 0;
  }
  }
`
