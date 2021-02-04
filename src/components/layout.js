import React, { useState } from "react"
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
import SideBar from "./sidebar"

const MainWrapper = styled.main`
  margin: 0 auto;
`

const Layout = ({ children, homepage }) => {
  const [theme, themeToggler] = useDarkMode()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // console.log("theme", theme)
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div style={{ overflowX: "hidden" }}>
        <GlobalStyles />
        <SideBar
          isOpen={isOpen}
          toggle={toggle}
          theme={theme}
          themeToggler={themeToggler}
        />
        <Header
          theme={theme}
          themeToggler={themeToggler}
          toggle={toggle}
          homepage={homepage}
        />
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
