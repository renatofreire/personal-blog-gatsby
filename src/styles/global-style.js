import { createGlobalStyle } from "styled-components"
import {darkTheme as dark }from "./tokens"

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: var(--color-background-base);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


body {
	font-size: 16px;
}

main {
	overflow: auto;
}

em {
	font-style: italic;
}

p > a {
	color: var(--color-font-link);
}

p > a:visited {
	color: var(--color-font-visitedLink);
}

a {
  border: 1px solid transparent;
}

a:active, a:focus,
button:active, button:focus  {
	border: 1px dotted var(--color-border-a11yLink);
}

code {
	font-family: "Courier New", Courier, monospace;
	padding: 0px 2px;
	color: var(--color-font-code);
}

strong {
	font-weight: bold;
}


.gatsby-highlight {
  background-color: #272822;
  border-radius: 0.3em;
  padding: 0px 5px;
  overflow: auto;
	max-width: 980px;
	margin-bottom: 1em;

	code {
		font-family: "Courier New", Courier, monospace;
		padding: 0;
	}
}

.gatsby-highlight pre[class*="language-"].line-numbers {
  padding: 0;
  padding-left: 2.8em;
	padding-top: 0px;
  overflow: initial;
}

.gatsby-highlight .line-numbers-rows {
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-evenly;
}

.gatsby-highlight .token.comment {
	color: #77CC77;
}

// creating CSS variables
body.dark {
	--color-background-base: ${dark.colors.backgrounds.base};
	--color-font-link: ${dark.colors.fonts.link};
	--color-font-visitedLink: ${dark.colors.fonts.visitedLink};
	--color-font-code: ${dark.colors.fonts.code};
	--color-border-a11yLink: ${dark.colors.borders.a11yLink};
	--color-category1: ${dark.colors.category1};
	--color-category2: ${dark.colors.category2};
	--color-category3: ${dark.colors.category3};
	--color-category4: ${dark.colors.category4};
	--color-category5: ${dark.colors.category5};
	--color-category6: ${dark.colors.category6};
	--color-dark: ${dark.colors.dark};
	

	--fontFamily-infos: ${dark.fonts.infos};
}

body.light {
	--color-background-base: ${dark.colors.backgrounds.base};
	--color-font-link: ${dark.colors.fonts.link};
	--color-font-visitedLink: ${dark.colors.fonts.visitedLink};
	--color-font-code: ${dark.colors.fonts.code};
	--color-border-a11yLink: ${dark.colors.borders.a11yLink};
	--color-category1: ${dark.colors.category1};
	--color-category2: ${dark.colors.category2};
	--color-category3: ${dark.colors.category3};
	--color-category4: ${dark.colors.category4};
	--color-category5: ${dark.colors.category5};
	--color-category6: ${dark.colors.category6};
	--color-dark: ${dark.colors.dark};
	

	--fontFamily-infos: ${dark.fonts.infos};
}
`

export default GlobalStyles
