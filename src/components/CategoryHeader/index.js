import React from "react"

import * as S from "./styled"

const CategoryHeader = ({ category: { cssVariable, description, label } }) => (
  <S.Content>
    <S.Title>
      <S.CategoryContainer>
        <S.CategoryBadge color={cssVariable} size={24} />
        <S.Category color={cssVariable}>{label}</S.Category>
      </S.CategoryContainer>
    </S.Title>

    <S.Description>{description}</S.Description>
  </S.Content>
)

export default CategoryHeader
