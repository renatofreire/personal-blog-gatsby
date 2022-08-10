import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyles from "../../../styles/new-global-style"
import Sidebar from "../Sidebar"


export const BlogContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`


const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <BlogContainer>
      <Sidebar />
      <main>{children}</main>
    </BlogContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
