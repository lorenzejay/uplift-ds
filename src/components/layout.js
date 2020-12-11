import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const MainWrapper = styled.main`
  margin: 0 auto;
`
const Header = styled.header`
  z-index: 100;
  height: 10vh;
  display: flex;
  position: relative;
  background: white;
  padding: 0 16px;
  align-items: center;
  width: 100%;
`
const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`
const NavLink = styled.div`
  a {
    color: #333;
    padding: 0 16px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`
const Branding = styled.div`
  margin: auto 0;

  a {
    color: #333;
    padding: 0 16px;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const Layout = ({ children }) => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
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

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY !== 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    })
  })
  // useEffect(() => {
  //   console.log(window.scrollY)
  //   if (window.scrollY !== 0) {
  //     setScrollPosition(window.scrollY)
  //   }
  // })

  const navigationLinks =
    data.allPrismicNavigation.edges[0].node.data.navigation_links

  return (
    <>
      <Header scrolling={scrolling}>
        <Branding>
          <Link to="/">
            {data.allPrismicNavigation.edges[0].node.data.branding}
          </Link>
        </Branding>
        <NavLinks>
          {navigationLinks.map(link => {
            return (
              <NavLink key={link.link.uid}>
                <Link to={`/${link.link.uid}`}>{link.label}</Link>
              </NavLink>
            )
          })}
        </NavLinks>
      </Header>
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
