import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import placeholder from "../../images/placeholder.png"
import CategoryContainer from "../CategoryContainer"

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
}) => (
  <S.PostContainer>
    <S.Title>
      <Link to={url}>{title}</Link>
    </S.Title>

    <S.InfoContainer>
      <CategoryContainer category={category} />
      {tags && <S.TagsContainer tags={tags} />}
    </S.InfoContainer>

    <S.PostContent>
      <S.ImageContainer to={url}>
        <S.CoverImage src={image?.publicURL || placeholder} alt={altImage} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Date>Postado em {date}</S.Date>
        <S.Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </S.TextContainer>
    </S.PostContent>

    <S.PostLink to={url}>ver post</S.PostLink>
  </S.PostContainer>
)

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  altImage: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
}

export default PostItem
