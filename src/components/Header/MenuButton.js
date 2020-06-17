import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const MenuButton = ({ isMenuOpen, onClick }) => {
  const handleClick = () => {
    onClick(!isMenuOpen)
  }

  const className = isMenuOpen ? "menu-open" : ""

  return (
    <S.Button onClick={handleClick}>
      <S.ButtonLine1 className={className} />
      <S.ButtonLine2 className={className} />
      <S.ButtonLine3 className={className} />
    </S.Button>
  )
}

MenuButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuButton
