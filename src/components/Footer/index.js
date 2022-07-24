import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import logoDarkPath from "../../images/renato-freire-dark.svg"
import categoriesInfo from "../../utils/categories-info"

import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Footer = () => {
  const {
    allMarkdownRemark: { distinct: categories },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
      }
    `
  )

  return (
    <S.Footer>
      <S.CategoriesContainer>
        <S.CategoriesContent>
          <S.CategoryList>
            {categories &&
              categories.map(categorySlug => {
                const category = categoriesInfo(categorySlug)
                const { cssVariable, label, slug } = category
                return (
                  category && (
                    <S.Category key={slug}>
                      <S.CategoryLink to={`/${slug}`}>
                        <S.CategoryBadge size={16} color={cssVariable} />
                        {label}
                      </S.CategoryLink>
                    </S.Category>
                  )
                )
              })}
          </S.CategoryList>
        </S.CategoriesContent>
      </S.CategoriesContainer>

      <S.LinksContainer>
        <S.LinksContent>
          <Link to="/">
            <S.Logo
              src={logoDarkPath}
              title="ir para página principal do blog"
              alt=""
            />
          </Link>
          <S.SocialLinksContainer>
            <S.SocialLinksText>
              Me acompanhe nas redes sociais:{" "}
            </S.SocialLinksText>
            <SocialLinks iconSize={50} appearance="dark" />
          </S.SocialLinksContainer>
        </S.LinksContent>
      </S.LinksContainer>
    </S.Footer>
  )
}

export default Footer
