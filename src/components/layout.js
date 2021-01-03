import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import Footer from "./footer"
import Header from "./header"
import "../styles/default.js"
import { useDarkMode } from "./useDarkMode"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./globalStyles"
import { lightTheme, darkTheme } from "./theme"

const MainWrapper = styled.main`
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  // console.log("theme", theme)
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ overflowX: "hidden" }}>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
