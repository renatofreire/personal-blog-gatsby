import React from "react"
import propTypes from "prop-types"

import * as S from "./styled"

const TagsContainer = ({ tags }) => (
  <S.TagsContainer>
    <S.TagsTitle>tags:</S.TagsTitle>
    <S.TagsList>
      {tags.map(tag => (
        <S.TagItem key={tag}>{tag}</S.TagItem>
      ))}
    </S.TagsList>
  </S.TagsContainer>
)

TagsContainer.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
}

export default TagsContainer
