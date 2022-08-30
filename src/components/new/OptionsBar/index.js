import React from "react";

import ThemeButton from "../ThemeButton"
import GoToTop from "../GoToTop"


import  * as S from "./styled";

const OptionsBar = () => {
  return(
    <S.OptionsBarContainer>
      <S.ThemeButtonContainer>
        <ThemeButton />
      </S.ThemeButtonContainer>
      <GoToTop />
    </S.OptionsBarContainer>
  )
}

export default OptionsBar;