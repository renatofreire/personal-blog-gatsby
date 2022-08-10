import React from "react"
import PropTypes from "prop-types"

import {GithubIcon, LinkedinIcon} from "../SocialIcons"
import DefaultIcon from "../CategoryBadge" 

import * as S from "./styled"

const allowedIcons = ["default", "github", "linkedin"];
const iconSize = 30;

const returnIcon = (iconType, iconColor) => {
  switch (iconType) {
    case "github":
      return <GithubIcon size={iconSize} color={iconColor} />
    case "linkedin":
      return <LinkedinIcon size={iconSize} color={iconColor} />
    
    default:
      return <DefaultIcon size={iconSize} color={iconColor} />
  }
}

const CollapsibleMenu = ({menuTitle, menuItens}) => {
  return(
    <S.CollapsibleContainer>
      <S.MenuTitleContainer>
        <S.MenuTitle>{menuTitle}</S.MenuTitle>  
      </S.MenuTitleContainer>
      <div>
        {menuItens.map(({title, text, link, textColor, iconType, iconColor}) => (
          <S.Link
            key={title}
            to={link}
            color={textColor}
            title={title}
          >
            {returnIcon(iconType, iconColor)}
            <S.MenuText>
              {text}
            </S.MenuText>
          </S.Link>          
        ))}
      
      </div>
    </S.CollapsibleContainer>
  )
};

CollapsibleMenu.defaultProps = {
  menuTitle: "",
  menuItens: [],
}

CollapsibleMenu.propTypes = {
  menuTitle: PropTypes.string,
  menuItens: PropTypes.arrayOf(
    PropTypes.shape({
      iconType: PropTypes.oneOf(allowedIcons),
      iconColor: PropTypes.string,
      text: PropTypes.string,
      textColor: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
    })
  )

}

export default CollapsibleMenu;
