import React from "react"

import * as S from "./styled"

const CategoryHeader = ({ category: { categoryColor, description, label } }) => (
  <S.Content>
    <S.Title>
      <S.CategoryContainer>
        <S.CategoryBadge color={categoryColor} size={24} />
        <S.Category color={categoryColor}>{label}</S.Category>
      </S.CategoryContainer>
    </S.Title>

    <S.Description>{description}</S.Description>
  </S.Content>
)

export default CategoryHeader
