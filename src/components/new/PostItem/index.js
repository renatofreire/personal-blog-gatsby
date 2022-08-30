import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import categoriesInfo from "../../../utils/categories-info"

import CategoryContainer from "../CategoryContainer"

import * as S from "./styled"

const PostItem = ({
  title,
  category,
  date,
  updatedAt,
  image,
  altImage,
  excerpt,
  tags,
  url,
}) => {
  const { categoryColor, fontColor, label, slug } = categoriesInfo(category);

  return (
  <S.PostContainer color={ categoryColor }>
    <S.Title>
      <S.TitleLink to={url}>{title}</S.TitleLink>
    </S.Title>

    <S.PostDate>{updatedAt? `Atualizado em ${updatedAt}` : `Postado em ${date}` } </S.PostDate>
    <S.Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />

    <S.PostNavigation>
      <div>
        <CategoryContainer category={category} />
        {tags && <S.TagsContainer tags={tags} />}
      </div>
      <S.PostLink to={url}>
        <S.Arrow />
        Leia mais
      </S.PostLink>
    </S.PostNavigation>

  
  </S.PostContainer>
)}

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


/*
  <S.Title>
      <Link to={url}>{title}</Link>
    </S.Title>

    <S.InfoContainer>
      <CategoryContainer category={category} />
      {tags && <S.TagsContainer tags={tags} />}
    </S.InfoContainer>

    <S.PostContent>
      <S.ImageContainer to={url} title="ver post completo">
        <S.CoverImage src={image?.publicURL || placeholder} alt={altImage} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Date>Postado em {date}</S.Date>
        <S.Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </S.TextContainer>
    </S.PostContent>

    <S.PostLink to={url} title="ver post completo">
      ver post
    </S.PostLink>


*/