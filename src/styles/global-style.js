import { createGlobalStyle } from "styled-components"
import {darkTheme as dark, lightTheme as light }from "./tokens"

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

	--color-font-title: ${dark.colors.fonts.title};
	--color-font-text: ${dark.colors.fonts.text};
	--color-font-boxedText: ${dark.colors.fonts.boxedText};
	--color-font-info: ${dark.colors.fonts.info};
	--color-font-code: ${dark.colors.fonts.code};
	--color-font-link: ${dark.colors.fonts.link};
	--color-font-visitedLink: ${dark.colors.fonts.visitedLink};
	--color-font-navigationLink: ${dark.colors.fonts.navigationLink};
	--color-font-primaryButton: ${dark.colors.fonts.primaryButton};
	--color-font-primaryButtonDisabled: ${dark.colors.fonts.primaryButtonDisabled};
	--color-font-tableHeader: ${dark.colors.fonts.tableHeader};
	--color-font-footer: ${dark.colors.fonts.footer};

	--color-border-a11yLink: ${dark.colors.borders.a11yLink};
	--color-border-a11yPrimaryButton: ${dark.colors.borders.a11yPrimaryButton};
	--color-border-a11yFooterLink: ${dark.colors.borders.a11yFooterLink};
	--color-border-tableHeader: ${dark.colors.borders.tableHeader};
	--color-border-tableRow: ${dark.colors.borders.tableRow};

	--color-background-base: ${dark.colors.backgrounds.base};
	--color-background-contrast: ${dark.colors.backgrounds.contrast};
	--color-background-level1: ${dark.colors.backgrounds.level1};
	--color-background-level2: ${dark.colors.backgrounds.level2};
	--color-background-level3: ${dark.colors.backgrounds.level3};
	--color-background-categoryLabel: ${dark.colors.backgrounds.categoryLabel};
	--color-background-categoryLabelHover: ${dark.colors.backgrounds.categoryLabelHover};
	--color-background-primaryButton: ${dark.colors.backgrounds.primaryButton};
	--color-background-primaryButtonHover: ${dark.colors.backgrounds.primaryButtonHover};
	--color-background-tableHeader: ${dark.colors.backgrounds.tableHeader};
	--color-background-tableRowOdd: ${dark.colors.backgrounds.tableRowOdd};
	--color-background-tableRowEven: ${dark.colors.backgrounds.tableRowEven};

	--font-text: ${dark.fonts.text};
	--font-title: ${dark.fonts.title};
	--font-infos: ${dark.fonts.infos};

	--radius-small: ${dark.radius.small};

	--shadow-default: ${dark.shadows.default};
	--shadow-hover: ${dark.shadows.hover};
	--shadow-header: ${dark.shadows.header};
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

	--color-font-title: ${light.colors.fonts.title};
	--color-font-text: ${light.colors.fonts.text};
	--color-font-boxedText: ${light.colors.fonts.boxedText};
	--color-font-info: ${light.colors.fonts.info};
	--color-font-code: ${light.colors.fonts.code};
	--color-font-link: ${light.colors.fonts.link};
	--color-font-visitedLink: ${light.colors.fonts.visitedLink};
	--color-font-navigationLink: ${light.colors.fonts.navigationLink};
	--color-font-primaryButton: ${light.colors.fonts.primaryButton};
	--color-font-primaryButtonDisabled: ${light.colors.fonts.primaryButtonDisabled};
	--color-font-tableHeader: ${light.colors.fonts.tableHeader};
	--color-font-footer: ${light.colors.fonts.footer};

	--color-border-a11yLink: ${light.colors.borders.a11yLink};
	--color-border-a11yPrimaryButton: ${light.colors.borders.a11yPrimaryButton};
	--color-border-a11yFooterLink: ${light.colors.borders.a11yFooterLink};
	--color-border-tableHeader: ${light.colors.borders.tableHeader};
	--color-border-tableRow: ${light.colors.borders.tableRow};

	--color-background-base: ${light.colors.backgrounds.base};
	--color-background-contrast: ${light.colors.backgrounds.contrast};
	--color-background-level1: ${light.colors.backgrounds.level1};
	--color-background-level2: ${light.colors.backgrounds.level2};
	--color-background-level3: ${light.colors.backgrounds.level3};
	--color-background-categoryLabel: ${light.colors.backgrounds.categoryLabel};
	--color-background-categoryLabelHover: ${light.colors.backgrounds.categoryLabelHover};
	--color-background-primaryButton: ${light.colors.backgrounds.primaryButton};
	--color-background-primaryButtonHover: ${light.colors.backgrounds.primaryButtonHover};
	--color-background-tableHeader: ${light.colors.backgrounds.tableHeader};
	--color-background-tableRowOdd: ${light.colors.backgrounds.tableRowOdd};
	--color-background-tableRowEven: ${light.colors.backgrounds.tableRowEven};

	--font-text: ${light.fonts.text};
	--font-title: ${light.fonts.title};
	--font-infos: ${light.fonts.infos};

	--radius-small: ${light.radius.small};

	--shadow-default: ${light.shadows.default};
	--shadow-hover: ${light.shadows.hover};
	--shadow-header: ${light.shadows.header};
}
`

export default GlobalStyles
