const backgrounds = {
  base: "#222222",
  contrast: "#FFFFFF",
  level1: "#333333",
  level2: "#555555",
  level3: "#777777",
  categoryLabel: "#333333",
  categoryLabelHover: "#383838",
  primaryButton: "#73E3E8",
  primaryButtonHover: "#ACFFFF",
  tableHeader: "#73E3E8",
  tableRowOdd: "#777777",
  tableRowEven: "#999999",
}
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

const borderColors = {
  a11yLink: "#73E3E8",
  a11yPrimaryButton: "#000000",
  a11yFooterLink: "#000000",
  tableHeader: "#FFFFFF",
  tableRow: "#FFFFFF",
}

const fontColors = {
  title: "#FFFFFF",
  text: "#FFFFFF",
  boxedText: "#000000",
  info: "#FFFFFF",
  code: "#FFFFFF",
  link: "#73E3E8",
  visitedLink: "#C7C7FA",
  navigationLink: "#FFFFFF",
  primaryButton: "#333333",
  primaryButtonDisabled: "#D3D3D3",
  tableHeader: "#333333",
  footer: "#333333",
}

const colors = {
  ...rawColors,
  fonts: fontColors,
  borders: borderColors,
  backgrounds,
}

const fonts = {
  text: "1em/1.5em Verdana, Tahoma, sans-serif",
  title: "1.5em Verdana, Tahoma, sans-serif",
  infos: "0.9em Verdana, Tahoma, sans-serif",
}

const radius = {
  small: "3px",
}

const shadows = {
  default:
    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  hover:
    "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  header: "0px 1px 5px 0px #000000",
}

module.exports = {
  colors,
  fonts,
  radius,
  shadows,
}
