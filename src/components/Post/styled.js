import styled from "styled-components"

import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

export const PostContainer = styled.article`
  margin-top: 5em;
`

export const InfosContainer = styled.div`
  margin: 1em 0em;

  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`

export const Date = styled.p`
  font: ${fonts.infos};
  color: ${colors.font};
  font-weight: bold;

  @media (max-width: 499px) {
    margin-top: 1em;
  }
`

export const Content = styled.div`
  font: ${fonts.text};
  color: ${colors.dark};
  margin-top: 2em;

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
    box-sizing: border-box;
    margin-bottom: 1em;
    padding-left: 1.5em;
  }

  ol {
    list-style: arabic-latin;
  }

  ul {
    list-style: disc;
  }

  ol li {
    margin-bottom: 0.7em;
    color: ${colors.dark};
  }

  ol li::marker {
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0px;
    margin-bottom: 1em;
    width: 100%;
    max-width: 980px;
  }

  th {
    background-color: ${colors.brand2};
    color: ${colors.dark};
    font-weight: bold;
    padding: 10px;
    text-align: left;
    border-left: 3px solid ${colors.white};
  }

  tbody tr:nth-child(odd) {
    background-color: ${colors.background};
  }

  tbody tr:nth-child(even) {
    background-color: ${colors.lightGray};
  }

  td {
    padding: 10px;
    border-left: 3px solid ${colors.white};
  }

  th:first-child,
  td:first-child {
    border-left: none;
  }
`
