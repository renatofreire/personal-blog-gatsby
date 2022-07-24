import styled from "styled-components"

import { darkTheme } from "../../styles/tokens"

const {colors, fonts} = darkTheme;

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
  font: ${fonts.text};
  color: ${colors.fonts.info};
  font-weight: bold;
  margin-right: 0.5em;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TagItem = styled.li`
  font: ${fonts.infos};
  color: ${colors.fonts.info};
  margin: 0.5em 0;

  &:after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: ${colors.fonts.info};
    border-radius: 5px;
    margin: 0px 0.5em;
    display: inline-block;
    vertical-align: middle;
  }

  &:last-child:after {
    display: none;
  }
`
