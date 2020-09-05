import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { colors, fonts } from "../../styles/tokens"

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 56px;
`

export const Header = styled.header`
  width: 100%;
  background-color: ${colors.dark};
  border-bottom: 3px solid ${colors.brand2};
  padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  max-height: 60px;
  box-shadow: 0px 1px 5px 0px ${colors.headerShadow};
`
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 100px;
  height: 40px;
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  transition: right 0.3s;

  @media (max-width: 450px) {
    width: 100%;
    max-width: 250px;
    position: absolute;
    z-index: 99;
    right: -250px;
    box-sizing: border-box;
    flex-direction: column;
    align-content: space-around;
    top: 56px;
    background-color: ${colors.dark};
    padding: 32px 8px;
    height: 100px;
    justify-content: space-around;
    box-shadow: 2px 2px 6px ${colors.dark};
  }

  &.menu-open {
    right: 0;
  }
`

export const Link = styled(GatsbyLink)`
  font: ${fonts.text};
  text-decoration: none;
  color: ${colors.white};
  margin-left: 10px;
`
export const Button = styled.button`
  display: none;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  position: relative;

  @media (max-width: 450px) {
    display: flex;
  }
`

export const ButtonLine1 = styled.div`
  width: 30px;
  height: 5px;
  background-color: ${colors.white};
  transition: transform 0.1s;

  &.menu-open {
    position: absolute;
    top: 12px;
    transform: rotate(45deg);
  }
`

export const ButtonLine2 = styled.div`
  width: 30px;
  height: 5px;
  background-color: ${colors.white};
  transition: width 0.1s;

  &.menu-open {
    width: 0;
  }
`

export const ButtonLine3 = styled.div`
  width: 30px;
  height: 5px;
  background-color: ${colors.white};
  transition: transform 0.1s;

  &.menu-open {
    position: absolute;
    top: 12px;
    transform: rotate(-45deg);
  }
`
