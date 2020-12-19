import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import Footer from "./footer"
import Header from "./header"
import "../styles/default.js"

const MainWrapper = styled.main`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
