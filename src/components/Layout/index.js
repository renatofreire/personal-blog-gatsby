import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global-style"

import Header from "../Header"
import Footer from "../Footer"

import * as S from "./styled"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <S.BlogContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </S.BlogContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
