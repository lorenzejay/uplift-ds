import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/header_styles.scss"
import { device } from "../styles/default"
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa"

const Navbar = styled.header`
  z-index: 100;
  height: 10vh;
  display: flex;
  position: relative;
  background: white;
  padding: 0 5%;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.darkContrast};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  .icon {
    color: ${({ theme }) => theme.text};
  }
  .burger {
    div {
      background-color: ${({ theme }) => theme.text};
    }
  }
`
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-around;
  width: 20%;
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 30%;
  }
`
const NavLink = styled.div`
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${device.desktop} {
    a {
      font-size: 1.8rem;
    }
  }
`
const Branding = styled.div`
  margin: auto 0;
  a {
    letter-spacing: 5px;
    color: ${({ theme }) => theme.text};
    padding: 0 16px;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  @media ${device.desktop} {
    .nav-logo {
      font-size: 3rem;
    }
  }
`
const Header = ({ theme, themeToggler }) => {
  const [burgerActive, setBurgerActive] = useState(false)

  const data = useStaticQuery(graphql`
    query NavQuery {
      allPrismicNavigation {
        edges {
          node {
            data {
              branding
              navigation_links {
                label
                link {
                  uid
                }
              }
            }
          }
        }
      }
    }
  `)

  const navigationLinks =
    data.allPrismicNavigation.edges[0].node.data.navigation_links
  return (
    <Navbar className="navbar">
      <Branding>
        <Link to="/" className="nav-logo">
          {data.allPrismicNavigation.edges[0].node.data.branding}
        </Link>
      </Branding>
      <NavLinks className={`nav-links ${burgerActive ? "nav-active" : ""}`}>
        {navigationLinks.map(link => {
          return (
            <NavLink key={link.link.uid}>
              <Link to={`/${link.link.uid}`}>{link.label}</Link>
            </NavLink>
          )
        })}
      </NavLinks>
      <span className="darkmode-btn">
        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        {theme === "dark" ? (
          <FaLightbulb onClick={themeToggler} className="icon" />
        ) : (
          <FaRegLightbulb onClick={themeToggler} className="icon" />
        )}
      </span>
      <div className="burger" onClick={() => setBurgerActive(!burgerActive)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Navbar>
  )
}

export default Header
