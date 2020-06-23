import React from "react"
import propTypes from "prop-types"

import CategoryContainer from "../CategoryContainer"
import TagsContainer from "../TagsContainer"

import * as S from "./styled"

const PostItem = ({
  title,
  category,
  date,
  image,
  altImage,
  excerpt,
  tags,
  url,
}) => {
  return (
    <S.PostContainer>
      <S.Title>{title}</S.Title>
      <S.ImageContainer to={url}>
        <S.CoverImage src={image?.publicURL} alt={altImage} />
      </S.ImageContainer>
      <S.PostContent>
        <S.InfoContainer>
          <CategoryContainer category={category} />
          <S.Date>Postado em {date}</S.Date>
        </S.InfoContainer>
        <S.Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </S.PostContent>
      {tags && <TagsContainer tags={tags} />}
      <S.PostLink to={url}>ver mais</S.PostLink>
    </S.PostContainer>
  )
}

PostItem.propTypes = {
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  image: propTypes.object.isRequired,
  altImage: propTypes.string.isRequired,
  excerpt: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  url: propTypes.string.isRequired,
}

export default PostItem
