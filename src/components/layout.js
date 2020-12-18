import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import Footer from "./footer"
import Header from "./header"
import "../styles/responsive.scss"
const MainWrapper = styled.main`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
