import React from "react"
import PropTypes from "prop-types"

import categoriesInfo from "../../utils/categories-info"

import * as S from "./styled"

const CategoryContainer = ({ category }) => {
  const { categoryColor, fontColor, label, slug } = categoriesInfo(category);

  return (
    <S.CategoryContainer
      to={`/${slug}`}
      title={`ver todos os post sobre ${label}`}
    >
      <S.CategoryBadge size={16} color={categoryColor} />
      <S.Category color={fontColor}>{label}</S.Category>
    </S.CategoryContainer>
  )
}

CategoryContainer.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryContainer
