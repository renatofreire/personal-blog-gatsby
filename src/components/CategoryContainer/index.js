import React from "react"
import PropTypes from "prop-types"

import CategoryBadge from "../CategoryBadge"
import categoriesInfo from "../../utils/categories-info"

import * as S from "./styled"

const CategoryContainer = ({ category }) => {
  const { color, label, slug } = categoriesInfo(category)

  return (
    <S.CategoryContainer to={`/${slug}`}>
      <CategoryBadge size={24} color={color} />
      <S.Category color={color}>{label}</S.Category>
    </S.CategoryContainer>
  )
}

CategoryContainer.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryContainer
