import React from "react"

import * as S from "./styled"

const Title = ({ children }) => (
  <S.Container>
    <S.Line />
    <S.TitleText>{children}</S.TitleText>
  </S.Container>
)

export default Title
