import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import socialIcons from "../SocialIcons"

import * as S from "./styled"

const SharePost = ({ postURL, postTitle }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const encodedTitle = encodeURIComponent(postTitle)
  const completeURL = `${siteUrl}${postURL}`

  return (
    <S.Container>
      <S.Text>Compartilhe:</S.Text>

      <S.LinksContainer>
        <S.ShareLink
          href={`http://twitter.com/intent/tweet?text=${encodedTitle}&url=${completeURL}&via=renatofreire_tw`}
          target="_new"
          title="compartilhe este post no Twitter"
        >
          <img width={50} src={socialIcons.twitter} alt="" />
        </S.ShareLink>

        <S.ShareLink
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${completeURL}&title=${encodedTitle}`}
          target="_new"
          title="compartilhe este post no Linkedin"
        >
          <img width={50} src={socialIcons.linkedin} alt="" />
        </S.ShareLink>
      </S.LinksContainer>
    </S.Container>
  )
}

SharePost.propTypes = {
  postURL: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
}

export default SharePost
