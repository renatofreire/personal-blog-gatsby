import React from "react"
import PropTypes from "prop-types"

import CategoryBadge from "../CategoryBadge"
import categoriesInfo from "../../utils/categories-info"

import * as S from "./styled"

const CategoryContainer = ({ category }) => {
  const postCategory = categoriesInfo(category)

  return (
    <S.CategoryContainer>
      <CategoryBadge size={24} color={postCategory.color} />
      <S.Category color={postCategory.color}>{postCategory.label}</S.Category>
    </S.CategoryContainer>
  )
}

CategoryContainer.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryContainer
