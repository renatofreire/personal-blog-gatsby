import React from "react"
import CategoryBadge from "../CategoryBadge"
import SectionContainer from "../SectionContainer"

import * as S from "./styled"

const CategoryHeader = ({ color, description, name }) => (
  <SectionContainer curvedBottom>
    <S.Content>
      <S.CategoryContainer>
        <CategoryBadge color={color} size={50} />
        <S.Category color={color}>{name}</S.Category>
      </S.CategoryContainer>
      <S.Description>{description}</S.Description>
    </S.Content>
  </SectionContainer>
)

export default CategoryHeader
