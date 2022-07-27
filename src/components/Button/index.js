import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;

  font: var(--font-infos);
  color: var(--color-font-primaryButton);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background-color: var(--color-background-primaryButton);
  padding: 0.5em;
  border-radius:var(--radius-small);
  box-shadow: var(--shadows-default);
  transition: color 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-background-primaryButtonHover);
    box-shadow: var(--shadow-hover);
  }

  &:active,
  &:focus {
    border: 1px dotted var(--color-border-a11yPrimaryButton);
  }
`

const Button = ({ children, className, to, ...props }) => (
  <StyledButton className={className} to={to} {...props}>
    {children}
  </StyledButton>
)

export default Button
