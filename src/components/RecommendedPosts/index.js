import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import CategoryContainer from "../CategoryContainer"

import * as S from "./styled"

const RecommendedPosts = ({ title, postsList }) => (
  <S.Container>
    <S.SectionTitle>{title}</S.SectionTitle>
    <S.RecommendedPosts>
      {postsList &&
        postsList.map(
          ({
            node: {
              frontmatter: { title: postTitle, category, date, description },
              fields: { url },
            },
          }) => {
            return (
              <S.PostContainer key={postTitle}>
                <S.PostTitle>
                  <Link to={url} title={`ver post ${postTitle}`}>
                    {postTitle}
                  </Link>
                </S.PostTitle>
                <S.PostInfos>
                  <CategoryContainer category={category} />
                  <S.PostDate>{date}</S.PostDate>
                </S.PostInfos>
                <S.PostExcerpt>{description}</S.PostExcerpt>
                <S.Link to={url} title={`ver post ${postTitle}`}>
                  ver post
                </S.Link>
              </S.PostContainer>
            )
          }
        )}
    </S.RecommendedPosts>
  </S.Container>
)

RecommendedPosts.defaultProps = {
  title: "posts relacionados",
}

RecommendedPosts.propTypes = {
  title: PropTypes.string,
  postsList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RecommendedPosts
