const { colors } = require("../styles/tokens")

const categories = {
  front: {
    label: "front-end",
    slug: "front-end",
    color: colors.category1,
    description:
      "Na categoria front-end, abordo desde a base com HTML, CSS e Javascript até assuntos mais aprofundados como utilização de frameworks e padrões de projeto.",
  },
  back: {
    label: "back-end",
    slug: "back-end",
    color: colors.category2,
    description:
      "Categoria onde abordo temas relacionados a back-end, com foco maior em tecnologias baseadas em Javascript.",
  },
  mobile: {
    label: "mobile",
    slug: "mobile",
    color: colors.category3,
    description:
      "Categoria onde abordo temas relacionados a desenvolvimento mobile, com foco em tecnologias híbridas usando Javascript.",
  },
  management: {
    label: "gestão de projetos",
    slug: "gestao-de-projetos",
    color: colors.category4,
    description:
      "Categoria onde falo sobre como gerenciar um projeto, com dicas de como organizar as tarefas e como coletar e analisar métricas.",
  },
  career: {
    label: "carreira",
    slug: "carreira",
    color: colors.category5,
    description:
      "Categoria onde falo sobre a carreira de desenvolvimento de software além do código e também conto um pouco das minhas experiências pessoais.",
  },
  dev: {
    label: "desenvolvimento",
    slug: "desenvolvimento",
    color: colors.category6,
    description:
      "Categoria onde abordo temas transversais, com teorias e conceitos que se aplicam em qualquer área do desenvolvimento de software.",
  },
}

const blankCategory = {
  label: "",
  slug: "/",
  color: colors.dark,
}

const categoriesInfo = category => categories[category] || blankCategory

module.exports = categoriesInfo
