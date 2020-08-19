import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Title = ({ children }) => (
  <S.Container>
    <S.Line />
    <S.TitleText>{children}</S.TitleText>
  </S.Container>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title
