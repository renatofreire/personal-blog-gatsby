import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const Bar = styled.div`
  height: 100vh;
  background-color: var(--color-background-sideBar);
  padding: 1em 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sideBar);
  overflow: auto;
  position: sticky;
  top: 0;
`

export const Logo = styled.img`
  width: 100px;
  align-self: flex-start;
`

export const Link = styled(GatsbyLink)`
  display: flex;
  justify-content: center;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
`