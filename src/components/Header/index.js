import React, { useState } from "react"
import { Link } from "gatsby"

import PageContainer from "../../styles/container"
import logoPath from "../../images/renato-freire.svg"

import * as S from "./styled"
import MenuButton from "./MenuButton"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <S.HeaderSpacer>
      {isMenuOpen && <S.Backdrop onClick={closeMenu} />}
      <S.Header>
        <PageContainer>
          <S.Navigation>
            <Link to="/" title="ir para página principal do blog">
              <S.Logo src={logoPath} alt="" />
            </Link>
            <MenuButton isMenuOpen={isMenuOpen} onClick={setIsMenuOpen} />
            <S.LinksContainer className={isMenuOpen ? "menu-open" : ""}>
              <S.SocialLinks iconSize={30} />
              <S.Link to="/sobre" onClick={closeMenu}>
                Sobre
              </S.Link>
            </S.LinksContainer>
          </S.Navigation>
        </PageContainer>
      </S.Header>
    </S.HeaderSpacer>
  )
}

export default Header
