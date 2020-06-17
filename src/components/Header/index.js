import React, { useState } from "react"
import { Link } from "gatsby"

import PageContainer from "../../styles/container"
import logoPath from "../../images/renato-freire.svg"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"
import MenuButton from "./MenuButton"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <S.HeaderSpacer>
      <S.Header>
        <PageContainer>
          <S.Navigation>
            <Link to="/" title="ir para página principal do blog">
              <S.Logo src={logoPath} alt="" />
            </Link>
            <MenuButton isMenuOpen={isMenuOpen} onClick={setIsMenuOpen} />
            <S.LinksContainer className={isMenuOpen ? "menu-open" : ""}>
              <SocialLinks iconSize={30} />
              <S.Link to="/sobre">Sobre</S.Link>
            </S.LinksContainer>
          </S.Navigation>
        </PageContainer>
      </S.Header>
    </S.HeaderSpacer>
  )
}

export default Header
