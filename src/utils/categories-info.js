const { colors } = require("../styles/tokens")

const categories = {
  front: {
    label: "front-end",
    slug: "front-end",
    color: colors.category1,
  },
  back: {
    label: "back-end",
    slug: "back-end",
    color: colors.category2,
  },
  mobile: {
    label: "mobile",
    slug: "mobile",
    color: colors.category3,
  },
  management: {
    label: "gestão de projetos",
    slug: "gestao-de-projetos",
    color: colors.category4,
  },
  career: {
    label: "carreira",
    slug: "carreira",
    color: colors.category5,
  },
  dev: {
    label: "desenvolvimento",
    slug: "desenvolvimento",
    color: colors.brand3,
  },
}

const blankCategory = {
  label: "",
  slug: "/",
  color: colors.dark,
}

const categoriesInfo = category => categories[category] || blankCategory

module.exports = categoriesInfo
