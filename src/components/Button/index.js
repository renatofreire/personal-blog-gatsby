import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { colors, fonts, radius, shadows } from "../../styles/tokens"
import { lightenHexColor } from "../../utils/colors"

const SButton = styled(Link)`
  display: flex;
  justify-content: center;

  font: ${fonts.infos};
  color: ${colors.dark};
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background-color: ${colors.brand2};
  padding: 0.5em;
  border-radius: ${radius.borderRadiusSmall};
  box-shadow: ${shadows.default};
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.dark};
    background-color: ${lightenHexColor(colors.brand2, 50)};
    box-shadow: ${shadows.hover};
  }

  &:active,
  &:focus {
    border: 1px dotted ${colors.black};
  }
`

const Button = ({ children, className, to, ...props }) => (
  <SButton className={className} to={to} {...props}>
    {children}
  </SButton>
)

export default Button
