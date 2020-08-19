import React from "react"
import propTypes from "prop-types"

import SectionContainer from "../SectionContainer"
import Title from "../Title"
import TagsContainer from "../TagsContainer"
import CategoryContainer from "../CategoryContainer"

import * as S from "./styled"

const Post = ({ title, tags, category, date, content }) => (
  <SectionContainer curvedBottom>
    <S.PostContainer>
      <Title>{title}</Title>
      <S.InfosContainer>
        <CategoryContainer category={category} />
        <S.Date>Postado em {date}.</S.Date>
      </S.InfosContainer>
      <TagsContainer tags={tags} />

      <S.Content dangerouslySetInnerHTML={{ __html: content }}></S.Content>
    </S.PostContainer>
  </SectionContainer>
)

Post.propTypes = {
  title: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  category: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
}
export default Post
