import styled from "styled-components"
import { Link } from "gatsby"

import TitleComponent from "../Title"
import TagsContainerComponent from "../TagsContainer"


export const PostContainer = styled.article`
  margin-bottom: 5em;
  padding-left: 2em;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 5px;
    background-color: ${({color}) => `var(--${color})`};
    transition: box-shadow .3s  ease-out;
  
  }

  &:hover:before {
    box-shadow: 0px 0px 7px 1px ${({color}) => `var(--${color})`};
  }
`;

export const Title = styled(TitleComponent)`
  margin-bottom: 1em;

`;

export const TitleLink = styled(Link)`
  transition: border-bottom .3s  ease-out;
  
  &:hover{
    border-bottom: 1px solid var(--color-font-text);
  }

`

export const PostDate = styled.time`
  font: var(--font-infos);
  color: var(--color-font-infos);
  display: block;
  margin-bottom: 1.5em;
`

export const Excerpt = styled.div`
  font: var(--font-text);
  color: var(--color-font-text);
`


export const TagsContainer = styled(TagsContainerComponent)`
  margin: 0 1em 0 0;

  @media (max-width: 799px) {
    margin: 0.5em 0 0 1em;
  }
`

export const PostNavigation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Arrow = styled.div`
  display:flex;
  align-items: center;
  margin-right: .5em;
  
  &:before {
    content: "";
    width: 10px;
    height: 2px;
    background-color: var(--color-background-iconFill);
  }

  &:after {
    content: "";
    border-top: 2px solid var(--color-background-iconFill);
    border-right: 2px solid var(--color-background-iconFill);
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-left: -7px;

    transform: rotate(45deg);
  }
`

export const PostLink = styled(Link)`
  display: flex;
  align-items: center;
  align-self: flex-end;
  font: var(--font-text);
  color: var(--color-font-text);
  font-weight: bold;
  text-decoration: none;

  
  border-bottom-width: 1px;
  border-bottom-style: solid;

  transition: border-color .3s  ease-out;
  
  &:hover {
    border-bottom-color: var(--color-font-text)
  }

`