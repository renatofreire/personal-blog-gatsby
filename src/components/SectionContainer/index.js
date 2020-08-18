import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const SectionContainer = ({ curvedTop, curvedBottom, children }) => (
  <S.Content curvedTop={curvedTop} curvedBottom={curvedBottom}>
    {children}
  </S.Content>
)

SectionContainer.defaultProps = {
  curvedTop: false,
  curvedBottom: false,
}
SectionContainer.propTypes = {
  curvedTop: PropTypes.bool,
  curvedBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default SectionContainer
