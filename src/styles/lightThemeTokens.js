const rawColors = {
  brand1: "#333333",
  brand2: "#73E3E8",
  brand3: "#6F69ED",
  category1: "#FED98D",
  category2: "#F5A094",
  category3: "#CA86EF",
  category4: "#9FA8F4",
  category5: "#17D9BA",
  category6: "#BDFF74",
}

const fontColors = {
  title: "#333333",
  text: "#222222",
  boxedText: "#000000",
  infos: "#222222",
  code: "#222222",
  link: "#6F69ED",
  visitedLink: "#2c2a5e",
  navigationLink: "#FFFFFF",
  primaryButton: "#FFFFFF",
  primaryButtonDisabled: "#D3D3D3",
  tableHeader: "#333333",
  footer: "#333333",
  category1: "#333333",
  category2: "#333333",
  category3: "#333333",
  category4: "#333333",
  category5: "#333333",
  category6: "#333333",
  jumboTitle: "#FFFFFF",
  menuTitle: "#73E3E8",
  menuItem: "#FFFFFF"
}

const borderColors = {
  a11yLink: "#73E3E8",
  a11yPrimaryButton: "#000000",
  a11yFooterLink: "#000000",
  tableHeader: "#FFFFFF",
  tableRow: "#FFFFFF",
}

const backgrounds = {
  base: "#FFFFFF",
  contrast: "#FFFFFF",
  level1: "#333333",
  level2: "#FFFFFF",
  level3: "#DDDDDD",
  categoryLabel: "#FFFFFF",
  categoryLabelHover: "#DDDDDD",
  primaryButton: "#6F69ED",
  primaryButtonHover: "#373476",
  tableHeader: "#73E3E8",
  tableRowOdd: "#BBBBBB",
  tableRowEven: "#DDDDDD",
  title: "#FFFFFF",
  jumboTitle: "#333333",
  themeButtonSlider: "#BBBBBB",
  themeButtonToggle: "#FFFFFF",
  sideBar: "#333333",
  iconFill: "#FFF",
  paginationIcon: "#FFFFFF",
  paginationIconDisabled: "#333333",
}

const colors = {
  ...rawColors,
  fonts: fontColors,
  borders: borderColors,
  backgrounds,
}

const fonts = {
  text: "1em/1.5em Verdana, Tahoma, sans-serif",
  title: "2em Verdana, Tahoma, sans-serif",
  infos: "0.875em Verdana, Tahoma, sans-serif",
  menuTitle: "1em Open Sans, Verdana, Tahoma, sans-serif",
}

const radius = {
  small: "3px",
}

const shadows = {
  default:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  hover:
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  header: "0px 1px 5px 0px #333333",
  sideBar: "2px 0 3px #444444",
  controlComponent: "0px 0px 5px 0px #000000",
}

module.exports = {
  colors,
  fonts,
  radius,
  shadows,
}
