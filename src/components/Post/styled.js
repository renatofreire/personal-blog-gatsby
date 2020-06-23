import styled from "styled-components"

import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`

export const Date = styled.p`
  font: ${fonts.infos};
  color: ${colors.font};
  font-weight: bold;
  margin: 2em 0em;
`

export const Content = styled.div`
  font: ${fonts.text};
  color: ${colors.dark};

  p {
    margin-bottom: 1em;
  }

  blockquote {
    padding: 5px 5px 5px 10px;
    border-left: 3px solid #215c84;
    border-left-color: ${colors.brand3};
    background-color: ${colors.background};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-style: italic;
    margin-bottom: 1em;
  }

  blockquote p {
    margin-bottom: 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2em;
    font-weight: bold;
    color: ${colors.black};
  }

  h2,
  h3 {
    margin-bottom: 1em;
  }

  h4,
  h5,
  h6 {
    margin-bottom: 0.5em;
    font-size: 1.1em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  ol,
  ul {
    width: 100%;
    list-style: arabic-latin;
    box-sizing: border-box;
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  ol li {
    margin-bottom: 0.7em;
    color: ${colors.dark};
  }

  ol li::marker {
    font-weight: bold;
  }
`
