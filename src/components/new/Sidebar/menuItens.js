const socialMediaInfos = [
  {
    name: "Linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/",
    user: "renato-freire",
  },
  {
    name: "Github",
    icon: "github",
    url: "https://github.com/",
    user: "renatofreire",
  },
];

export const socialMedia = socialMediaInfos.map(({name, icon, url, user}) => ({
  iconType: icon,
  text: name,
  textColor: "color-font-menuItem",
  link: `${url}${user}`,
  title: `Visitar meu perfil no ${name}`
}))



export const internalPages = [
  {
    text: "Sobre mim",
    link: "/sobre",
    title: "Visitar página Sobre mim"
  },
  {
    text: "Sobre o blog",
    link: "/sobre-o-blog",
    title: "Visitar página Sobre o blog"
  }
];