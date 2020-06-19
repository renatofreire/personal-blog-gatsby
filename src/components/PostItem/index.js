import React from "react"
import propTypes from "prop-types"

import CategoryBadge from "../CategoryBadge"

import categoriesInfo from "../../utils/categories-info"

import * as S from "./styled"

const PostItem = ({
  title,
  category,
  date,
  imageCover,
  excerpt,
  tags,
  url,
}) => {
  const postCategory = categoriesInfo(category)

  return (
    <S.PostContainer>
      <S.Title>{title}</S.Title>
      <S.CoverImage src={imageCover} alt="" />
      <S.PostContent>
        <S.InfoContainer>
          <S.CategoryContainer>
            <CategoryBadge size={24} color={postCategory.color} />
            <S.Category color={postCategory.color}>
              {postCategory.label}
            </S.Category>
          </S.CategoryContainer>
          <S.Date>Postado em {date}</S.Date>
        </S.InfoContainer>
        <S.Excerpt>{excerpt}</S.Excerpt>
      </S.PostContent>
      <S.TagsContainer>
        <S.TagsTitle>tags:</S.TagsTitle>
        <S.TagsList>
          {tags.map(tag => (
            <S.TagItem key={tag}>{tag}</S.TagItem>
          ))}
        </S.TagsList>
      </S.TagsContainer>
      <S.PostLink to={url}>ver mais</S.PostLink>
    </S.PostContainer>
  )
}

PostItem.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  imageCover: propTypes.string.isRequired,
  excerpt: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  url: propTypes.string.isRequired,
}

export default PostItem
