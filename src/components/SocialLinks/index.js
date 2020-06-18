import React from "react"
import PropTypes from "prop-types"

import socialIcons from "../SocialIcons"

import * as S from "./styled"
import socialInfos from "./infos"

const appearanceNames = name =>
  ({
    dark: "Dark",
    light: "",
  }[name] || "")

const SocialLinks = ({ className, iconSize, appearance }) => {
  const iconStyle = appearanceNames(appearance)
  return (
    <S.Container className={className}>
      {socialInfos.map(({ name, url, user }) => (
        <S.SocialLink
          key={name}
          href={`${url}${user}`}
          title={`acesse meu perfil no ${name}`}
          rel="noopener noreferrer"
        >
          <img
            width={iconSize}
            src={socialIcons[`${name}${iconStyle}`]}
            alt=""
          />
        </S.SocialLink>
      ))}
    </S.Container>
  )
}

SocialLinks.defaultProps = {
  className: "",
  appearance: "light",
}

SocialLinks.propTypes = {
  className: PropTypes.string,
  iconSize: PropTypes.number.isRequired,
  appearance: PropTypes.oneOf(["light", "dark"]),
}

export default SocialLinks
