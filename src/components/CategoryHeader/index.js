import React from "react"

import * as S from "./styled"

const CategoryHeader = ({ category: { color, description, label } }) => (
  <S.Content>
    <S.Title>
      <S.CategoryContainer>
        <S.CategoryBadge color={color} size={24} />
        <S.Category color={color}>{label}</S.Category>
      </S.CategoryContainer>
    </S.Title>

    <S.Description>{description}</S.Description>
  </S.Content>
)

export default CategoryHeader
