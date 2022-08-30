import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyles from "../../../styles/new-global-style"
import Sidebar from "../Sidebar"
import OptionsBar from "../OptionsBar"


export const BlogContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr auto;
`


const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <BlogContainer>
      <Sidebar />
      <main>{children}</main>
      <OptionsBar />
    </BlogContainer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
