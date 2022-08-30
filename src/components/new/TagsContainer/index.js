import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const TagsContainer = ({ className, tags }) => (
  <S.TagsContainer className={className}>
    <S.TagsTitle>tags:</S.TagsTitle>
    <S.TagsList>
      {tags.map(tag => (
        <S.TagItem key={tag}>{tag}</S.TagItem>
      ))}
    </S.TagsList>
  </S.TagsContainer>
)

TagsContainer.defaultProps = {
  className: "",
}

TagsContainer.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagsContainer
