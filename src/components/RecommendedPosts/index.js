import React from "react"
import PropTypes from "prop-types"

import SectionContainer from "../SectionContainer"
import CategoryContainer from "../CategoryContainer"

import Title from "./SectionTitle"
import * as S from "./styled"

const RecommendedPosts = ({ curvedTop, curvedBottom, title, postsList }) => (
  <SectionContainer curvedTop={curvedTop} curvedBottom={curvedBottom}>
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
              return (
                <S.PostContainer key={postTitle}>
                  <S.PostTitle to={url} title={`ver post ${postTitle}`}>
                    {postTitle}
                  </S.PostTitle>
                  <S.PostInfos>
                    <CategoryContainer category={category} />
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
  </SectionContainer>
)

RecommendedPosts.defaultProps = {
  curvedTop: false,
  curvedBottom: false,
  title: "posts relacionados",
}

RecommendedPosts.propTypes = {
  curvedTop: PropTypes.bool,
  curvedBottom: PropTypes.bool,
  title: PropTypes.string,
  postsList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RecommendedPosts
