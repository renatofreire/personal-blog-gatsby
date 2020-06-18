import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

import colors from "../../styles/colors"
import fonts from "../../styles/fonts"

const StyledTitle = styled.h1`
  font: ${fonts.title};
  color: ${colors.dark};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid ${colors.brand3};
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
`

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
