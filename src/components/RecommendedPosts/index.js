import React from "react"
import PropTypes from "prop-types"

import categoriesInfo from "../../utils/categories-info"

import CategoryBadge from "../CategoryBadge"

import Title from "./SectionTitle"
import * as S from "./styled"

const RecommendedPosts = ({ title, postsList }) => {
  console.log(postsList)
  return (
    <S.Container>
      <Title>{title}</Title>
      <S.RecommendedPosts>
        {postsList &&
          postsList.map(
            ({
              node: {
                frontmatter: { title: postTitle, category, date, description },
                fields: { url },
              },
            }) => {
              const categoryInfo = categoriesInfo(category)
              return (
                <S.PostContainer>
                  <S.PostTitle to={url} title={`ver post ${postTitle}`}>
                    {postTitle}
                  </S.PostTitle>
                  <S.PostInfos>
                    <S.PostCategory color={categoryInfo.color}>
                      <CategoryBadge size={20} color={categoryInfo.color} />
                      <span>{categoryInfo.label}</span>
                    </S.PostCategory>
                    <S.PostDate>{date}</S.PostDate>
                  </S.PostInfos>
                  <S.PostExcerpt>{description}</S.PostExcerpt>
                  <S.LinkContainer>
                    <S.Link to={url} title={`ver post ${postTitle}`}>
                      ver post
                    </S.Link>
                  </S.LinkContainer>
                </S.PostContainer>
              )
            }
          )}
      </S.RecommendedPosts>
    </S.Container>
  )
}

RecommendedPosts.defaultProps = {
  title: "posts relacionados",
}

RecommendedPosts.propTypes = {
  title: PropTypes.string,
  postsList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RecommendedPosts
