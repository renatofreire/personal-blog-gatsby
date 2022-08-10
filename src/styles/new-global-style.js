import { createGlobalStyle } from "styled-components"
import {darkTheme as dark, lightTheme as light }from "./tokens"

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

* {
	transition: background-color 1s ease, color 1s ease;
}

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
body.dark{
	--color-brand1: ${dark.colors.brand1};
	--color-brand2: ${dark.colors.brand2};
	--color-brand3: ${dark.colors.brand3};
	--color-category1: ${dark.colors.category1};
	--color-category2: ${dark.colors.category2};
	--color-category3: ${dark.colors.category3};
	--color-category4: ${dark.colors.category4};
	--color-category5: ${dark.colors.category5};
	--color-category6: ${dark.colors.category6};

	--color-font-category1: ${dark.colors.fonts.category1};
	--color-font-category2: ${dark.colors.fonts.category2};
	--color-font-category3: ${dark.colors.fonts.category3};
	--color-font-category4: ${dark.colors.fonts.category4};
	--color-font-category5: ${dark.colors.fonts.category5};
	--color-font-category6: ${dark.colors.fonts.category6};

	--color-font-title: ${dark.colors.fonts.title};
	--color-font-text: ${dark.colors.fonts.text};
	--color-font-menuTitle: ${dark.colors.fonts.menuTitle};
	--color-font-menuItem: ${dark.colors.fonts.menuItem};

	--color-background-sideBar: ${dark.colors.backgrounds.sideBar};

	--font-text: ${dark.fonts.text};
	--font-title: ${dark.fonts.title};
	--font-infos: ${dark.fonts.infos};
	--font-menuTitle: ${dark.fonts.menuTitle};
}

body.light{
	--color-brand1: ${light.colors.brand1};
	--color-brand2: ${light.colors.brand2};
	--color-brand3: ${light.colors.brand3};
	--color-category1: ${light.colors.category1};
	--color-category2: ${light.colors.category2};
	--color-category3: ${light.colors.category3};
	--color-category4: ${light.colors.category4};
	--color-category5: ${light.colors.category5};
	--color-category6: ${light.colors.category6};

	--color-font-category1: ${light.colors.fonts.category1};
	--color-font-category2: ${light.colors.fonts.category2};
	--color-font-category3: ${light.colors.fonts.category3};
	--color-font-category4: ${light.colors.fonts.category4};
	--color-font-category5: ${light.colors.fonts.category5};
	--color-font-category6: ${light.colors.fonts.category6};

	--color-font-title: ${light.colors.fonts.title};
	--color-font-text: ${light.colors.fonts.text};
	--color-font-menuTitle: ${light.colors.fonts.menuTitle};
	--color-font-menuItem: ${light.colors.fonts.menuItem};

	--color-background-sideBar: ${light.colors.backgrounds.sideBar};

	--font-text: ${light.fonts.text};
	--font-title: ${light.fonts.title};
	--font-infos: ${light.fonts.infos};
	--font-menuTitle: ${light.fonts.menuTitle};
}
`

export default GlobalStyles
