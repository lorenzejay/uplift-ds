import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa"

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: pointer;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SideBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  .darkmode-btn {
    cursor: pointer;
    margin-bottom: 15px;
  }
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #d3d3d3;
  cursor: pointer;
  margin-bottom: 5vh;
  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`

const SideBar = ({ isOpen, toggle, theme, themeToggler }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SideBarMenu>
          <span className="darkmode-btn">
            {theme === "dark" ? (
              <FaLightbulb
                onClick={themeToggler}
                className="icon"
                style={{ color: "#fff" }}
              />
            ) : (
              <FaRegLightbulb
                onClick={themeToggler}
                className="icon"
                style={{ color: "#fff" }}
              />
            )}
          </span>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/contact-us">Contact</SidebarLink>
          <SidebarLink to="/blog">Blog</SidebarLink>
        </SideBarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar
