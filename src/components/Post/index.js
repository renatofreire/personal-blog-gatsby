import React from "react"
import propTypes from "prop-types"

import Title from "../Title"
import CategoryContainer from "../CategoryContainer"

import * as S from "./styled"

const Post = ({ title, tags, category, date, content }) => (
  <S.PostContainer>
    <Title>{title}</Title>
    <S.InfosContainer>
      <CategoryContainer category={category} />
      {tags && <S.TagsContainer tags={tags} />}
    </S.InfosContainer>
    <S.Date>Postado em {date}</S.Date>

    <S.Content dangerouslySetInnerHTML={{ __html: content }}></S.Content>
  </S.PostContainer>
)

Post.propTypes = {
  title: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
}
export default Post
