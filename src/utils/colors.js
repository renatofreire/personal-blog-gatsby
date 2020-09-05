//TODO this entire file needs to be refactored and tested

export function hexWithAlpha(hexColor, alpha) {
  let alphaToHex = Math.trunc(alpha * 255).toString(16)
  if (alphaToHex.length < 2) {
    alphaToHex = `0${alphaToHex}`
  }

  return `${hexColor}${alphaToHex}`
}

const formatColor = (color, perc, factor) => {
  const colorHex = color.replace("#", "")

  if (colorHex.length !== 3 && colorHex.length !== 6) {
    throw new Error(
      "Invalid color format: please insert a valid hexadecimal color."
    )
  }

  const percent = percentRange(perc)

  const fullHexColor = colorHex.length === 3 ? doubleHex(colorHex) : colorHex

  const multiplyNumber = factor + (100 - percent) / 100

  const ret = [0, 1, 2]
    .map(i =>
      convertDecToHex(
        addZeroToHex(
          hexRange(
            multiplyColor(
              convertHexToDec(getRGBPart(fullHexColor, i)),
              multiplyNumber
            )
          )
        )
      )
    )
    .join("")
    .toUpperCase()

  return `#${ret}`
}

const addZeroToHex = hex => (hex.length < 2 ? `0${hex}` : hex)

const truncateInRange = (num, max, min) =>
  Math.trunc(Math.max(Math.min(num, max), min))

const hexRange = num => truncateInRange(num, 255, 0)

const percentRange = num => truncateInRange(num, 100, 0)

const getRGBPart = (hex, i) => {
  return hex.slice(i * 2, i * 2 + 2)
}

const convertHexToDec = hex => {
  return parseInt(hex, 16)
}

const convertDecToHex = dec => {
  return dec.toString(16)
}

const multiplyColor = (hex, mult) => {
  return hex * mult
}

const doubleHex = hex =>
  hex
    .split("")
    .map(h => `${h}${h}`)
    .join("")

export const darkenHexColor = (color, percent) => formatColor(color, percent, 0)

export const lightenHexColor = (color, percent) =>
  formatColor(color, percent, 1)
