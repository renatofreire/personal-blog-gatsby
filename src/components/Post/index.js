import React from "react"

import Title from "../Title"
import TagsContainer from "../TagsContainer"
import CategoryContainer from "../CategoryContainer"

import * as S from "./styled"

const Post = ({ title, tags, category, date, content }) => (
  <div>
    <Title>{title}</Title>
    <S.InfosContainer>
      <TagsContainer tags={tags} />
      <CategoryContainer category={category} />
    </S.InfosContainer>

    <S.Date>Postado em {date}.</S.Date>
    <S.Content dangerouslySetInnerHTML={{ __html: content }}></S.Content>
  </div>
)

export default Post
