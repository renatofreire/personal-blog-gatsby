import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import categoriesInfo from "../../../utils/categories-info"
import CollapsibleMenu from "../CollapsibleMenu"

const CategoriesMenu = () => {
  const {
    allMarkdownRemark: { distinct: categories },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
      }
    `
  )

  const categoriesList = categories.map(categoryName => {
    const {label, slug, categoryColor, fontColor} = categoriesInfo(categoryName);
    return ({
      iconType: "default",
      iconColor: categoryColor,
      text: label,
      textColor: fontColor,
      link: `/${slug}`,
      title: `Ver todos os post da categoria ${label}`
    });
  });


  return (
    <CollapsibleMenu 
      menuTitle="Categorias"
      menuItens={categoriesList}
    />
  )
}

export default CategoriesMenu;