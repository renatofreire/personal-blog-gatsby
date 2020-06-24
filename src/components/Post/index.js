import React from "react"

import Title from "../Title"
import TagsContainer from "../TagsContainer"
import CategoryContainer from "../CategoryContainer"

import * as S from "./styled"

const Post = ({ title, tags, category, date, content }) => (
  <div>
    <Title>{title}</Title>
    <S.InfosContainer>
      <CategoryContainer category={category} />
      <S.Date>Postado em {date}.</S.Date>
    </S.InfosContainer>
    <TagsContainer tags={tags} />

    <S.Content dangerouslySetInnerHTML={{ __html: content }}></S.Content>
  </div>
)

export default Post
