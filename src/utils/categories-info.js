const { colors } = require("../styles/tokens")

const categories = {
  front: {
    label: "front-end",
    slug: "front-end",
    color: colors.category1,
    description:
      "Categoria onde abordo temas relacionados a front-end, como HTML, CSS e Javascript. Mas também entro em temas mais profundos como arquitetura, design patterns e frameworks",
  },
  back: {
    label: "back-end",
    slug: "back-end",
    color: colors.category2,
    description: "Categoria onde abordo temas relacionados a back-end",
  },
  mobile: {
    label: "mobile",
    slug: "mobile",
    color: colors.category3,
    description: "Categoria onde abordo temas relacionados a mobile",
  },
  management: {
    label: "gestão de projetos",
    slug: "gestao-de-projetos",
    color: colors.category4,
    description:
      "Categoria onde abordo temas relacionados a gestao-de-projetos",
  },
  career: {
    label: "carreira",
    slug: "carreira",
    color: colors.category5,
    description: "Categoria onde abordo temas relacionados a carreira",
  },
  dev: {
    label: "desenvolvimento",
    slug: "desenvolvimento",
    color: colors.category6,
    description: "Categoria onde abordo temas relacionados a desenvolvimento",
  },
}

const blankCategory = {
  label: "",
  slug: "/",
  color: colors.dark,
}

const categoriesInfo = category => categories[category] || blankCategory

module.exports = categoriesInfo
