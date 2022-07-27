import React, { useState, useEffect } from "react"

import * as S from "./styled"

const ThemeButton = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = setTheme;
  }, []);
  
  const isDarkMode = theme === "dark";

  function defineTheme() {
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark');
  }

  
  
  return (
    <S.Switch
      title={`Alterar para tema ${isDarkMode ? 'claro' : 'escuro'}`}
    >
      <S.SwitchInput 
        type="checkbox" 
        onChange={defineTheme}
      />
      <S.Slider checked={isDarkMode}></S.Slider>
    </S.Switch>
  );
}

export default ThemeButton;