import styled from "styled-components"

import { colors, fonts, radius, shadows } from "../../styles/tokens"

import TagsContainerComponent from "../TagsContainer"

export const PostContainer = styled.article`
  margin-top: 2em;
  padding-bottom: 1em;
  background-color: ${colors.font};
  overflow: hidden;
  border-radius: ${radius.borderRadiusSmall};
  box-shadow: ${shadows.default};
`

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TagsContainer = styled(TagsContainerComponent)`
  margin: 0 1em 0 0;

  @media (max-width: 799px) {
    margin: 0.5em 0 0 1em;
  }
`

export const Date = styled.p`
  font: ${fonts.infos};
  color: ${colors.white};
  margin: 2em 1em;
  font-weight: bold;
`

export const Content = styled.div`
  font: ${fonts.text};
  color: ${colors.white};
  margin: 1em;

  p {
    margin-bottom: 1em;
  }

  blockquote {
    padding: 5px 5px 5px 10px;
    border-left: 3px solid #215c84;
    border-left-color: ${colors.brand2};
    background-color: ${colors.background};
    color: ${colors.black};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-style: italic;
    margin-bottom: 1em;
  }

  blockquote p {
    margin-bottom: 0;
  }

  blockquote code {
    color: ${colors.black};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2em;
    font-weight: bold;
  }

  h2,
  h3 {
    margin-bottom: 1em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.25em;
  }

  h4,
  h5,
  h6 {
    margin-bottom: 0.5em;
    font-size: 1.1em;
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
    color: ${colors.white};
  }

  ol li::marker {
    font-weight: bold;
    color: ${colors.white};
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
    color: ${colors.black};
  }

  tbody tr:nth-child(even) {
    background-color: ${colors.background2};
    color: ${colors.black};
  }

  tbody tr code {
    color: ${colors.black};
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
