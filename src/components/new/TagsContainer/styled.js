import styled from "styled-components"

export const TagsContainer = styled.div`
  grid-area: tags;
  display: flex;
  align-items: center;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TagsTitle = styled.p`
  font: var(--font-text);
  color: var(--color-font-text);
  font-weight: bold;
  margin-right: 0.5em;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TagItem = styled.li`
  font: var(--font-text);
  color: var(--color-font-text);

  &:after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: var(--color-font-text);
    border-radius: 5px;
    margin: 0px 0.5em;
    display: inline-block;
    vertical-align: middle;
  }

  &:last-child:after {
    display: none;
  }
`
