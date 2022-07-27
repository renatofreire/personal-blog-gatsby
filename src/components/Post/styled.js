import styled from "styled-components"

import TagsContainerComponent from "../TagsContainer"


export const PostContainer = styled.article`
  margin-top: 2em;
  padding-bottom: 1em;
  background-color: var(--color-background-level2);
  overflow: hidden;
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-default);
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
  font: var(--font-infos);
  color: var(--color-font-info);
  margin: 2em 1em;
  font-weight: bold;
`

export const Content = styled.div`
  font: var(--font-text);
  color: var(--color-font-text);
  margin: 1em;

  p {
    margin-bottom: 1em;
  }

  blockquote {
    padding: 5px 5px 5px 10px;
    border-left: 3px solid #215c84;
    border-left-color: var(--color-brand2);
    background-color: var(--color-background-level3);
    color: var(--color-font-boxedText);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-style: italic;
    margin-bottom: 1em;
  }

  blockquote p {
    margin-bottom: 0;
  }

  blockquote code {
    color: var(--color-font-boxedText);
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
    color: var(--color-font-text);
  }

  ol li::marker {
    font-weight: bold;
    color: var(--color-font-text);
  }

  table {
    border-collapse: collapse;
    border-spacing: 0px;
    margin-bottom: 1em;
    width: 100%;
    max-width: 980px;
  }

  th {
    background-color: var(--color-background-tableHeader);
    color: var(--color-font-tableHeader);
    font-weight: bold;
    padding: 10px;
    text-align: left;
    border-left: 3px solid var(--color-border-tableHeader);
  }

  tbody tr:nth-child(odd) {
    background-color: var(--color-background-tableRowOdd);
    color: var(--color-font-boxedText);
  }

  tbody tr:nth-child(even) {
    background-color: var(--color-background-tableRowEven);
    color: var(--color-font-boxedText);
  }

  tbody tr code {
    color: var(--color-font-boxedText);
  }

  thead th code {
    color: var(--color-font-tableHeader);
  }

  td {
    padding: 10px;
    border-left: 3px solid var(--color-border-tableRow);
  }

  th:first-child,
  td:first-child {
    border-left: none;
  }
`
