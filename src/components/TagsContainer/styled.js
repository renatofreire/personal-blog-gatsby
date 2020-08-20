import styled from "styled-components"

import { colors, fonts } from "../../styles/tokens"

export const TagsContainer = styled.div`
  grid-area: tags;
`

export const TagsTitle = styled.p`
  font: ${fonts.text};
  color: ${colors.dark};
  font-weight: bold;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TagItem = styled.li`
  font: ${fonts.infos};
  color: ${colors.brand3};
  margin: 0.5em 0;

  &:after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: ${colors.font};
    border-radius: 5px;
    margin: 0px 0.5em;
    display: inline-block;
    vertical-align: middle;
  }

  &:last-child:after {
    display: none;
  }
`
