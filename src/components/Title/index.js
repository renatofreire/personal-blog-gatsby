import React from "react"
import PropTypes from "prop-types"

import styled, { css } from "styled-components"

import { colors, fonts } from "../../styles/tokens"

const defaultStyle = css`
  font: ${fonts.title};
  background-color: ${colors.backgrounds.level2};
  color: ${colors.fonts.title};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5em;
  border-bottom: 2px solid ${colors.brand2};

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Heading1 = styled.h1`
  ${defaultStyle}
`
const Heading2 = styled.h2`
  ${defaultStyle}
`
const Heading3 = styled.h3`
  ${defaultStyle}
`
const Heading4 = styled.h4`
  ${defaultStyle}
`
const Heading5 = styled.h5`
  ${defaultStyle}
`
const Heading6 = styled.h6`
  ${defaultStyle}
`
const headings = [Heading1, Heading2, Heading3, Heading4, Heading5, Heading6]

const Title = ({ className, heading, children }) => {
  const Heading = headings[heading - 1] || Heading1
  return <Heading className={className}>{children}</Heading>
}

Title.defaultProps = {
  className: "",
  heading: 1,
}

Title.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default Title
