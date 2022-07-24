import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { darkTheme } from "../../styles/tokens"

const {colors, fonts, radius, shadows} = darkTheme;

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;

  font: ${fonts.infos};
  color: ${colors.fonts.primaryButton};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background-color: ${colors.backgrounds.primaryButton};
  padding: 0.5em;
  border-radius: ${radius.small};
  box-shadow: ${shadows.default};
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.backgrounds.primaryButtonHover};
    box-shadow: ${shadows.hover};
  }

  &:active,
  &:focus {
    border: 1px dotted ${colors.borders.a11yPrimaryButton};
  }
`

const Button = ({ children, className, to, ...props }) => (
  <StyledButton className={className} to={to} {...props}>
    {children}
  </StyledButton>
)

export default Button
