import React from "react"

import logoPath from "../../../images/renato-freire.svg"
import CollapsibleMenu from "../CollapsibleMenu"

import CategoriesMenu from "./CategoriesMenu"
import {internalPages, socialMedia} from "./menuItens"
import * as S from "./styled"


const Sidebar = () => {
  return (
    <S.Bar>

      <S.Link to="/new-home" title="Ir para página principal do blog">
        <S.Logo src={logoPath} alt="" />
      </S.Link>

      <S.Nav>
        <CategoriesMenu />

        <CollapsibleMenu
          menuTitle="Páginas"
          menuItens={internalPages}
        />
      </S.Nav>

      <CollapsibleMenu
        menuTitle="Redes sociais"
        menuItens={socialMedia}
      />
      
    </S.Bar>
  )
}

export default Sidebar;