import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";


export const CollapsibleContainer = styled.div`
  margin-top: 2em;
`

export const MenuTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .5em;
`
export const IconContainer = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuTitleIcon = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 10px solid var(--color-brand2);
`

export const MenuTitle = styled.p`
  font: var(--font-menuTitle);
  color: var(--color-font-menuTitle);
  font-weight: bold;
`

export const Link = styled(GatsbyLink)`
  color: ${({ color }) => color ? `var(--${color})` : "var(--color-font-menuItem)"};
  font: var(--font-text);
  display: block;
  padding: .25em 0;
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const MenuText = styled.span`
  text-transform: lowercase;
  margin-left: .5em;

  &::first-letter {
    text-transform: uppercase;
  }
`