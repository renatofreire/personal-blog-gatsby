import React from "react"
import { Link } from "gatsby"

import logoDarkPath from "../../images/renato-freire-dark.svg"
import colors from "../../styles/colors"

import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Footer = () => (
  <S.Footer>
    <S.CategoriesContainer>
      <S.CategoriesContent>
        <S.CategoryList>
          <S.Category>
            <S.CategoryLink to="/">
              <S.CategoryBadge size={16} color={colors.category1} />
              Front-end
            </S.CategoryLink>
          </S.Category>
          <S.Category>
            <S.CategoryLink to="/">
              <S.CategoryBadge size={16} color={colors.category2} />
              Mobile
            </S.CategoryLink>
          </S.Category>
          <S.Category>
            <S.CategoryLink to="/">
              <S.CategoryBadge size={16} color={colors.category3} />
              Back-end
            </S.CategoryLink>
          </S.Category>
          <S.Category>
            <S.CategoryLink to="/">
              <S.CategoryBadge size={16} color={colors.category4} />
              Gestão de projetos
            </S.CategoryLink>
          </S.Category>
          <S.Category>
            <S.CategoryLink to="/">
              <S.CategoryBadge size={16} color={colors.category5} />
              Carreira
            </S.CategoryLink>
          </S.Category>
        </S.CategoryList>
      </S.CategoriesContent>
    </S.CategoriesContainer>

    <S.LinksContainer>
      <S.LinksContent>
        <Link to="/">
          <S.Logo src={logoDarkPath} />
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

export default Footer
