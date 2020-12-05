import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const Layout = ({ children }) => {
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
                  document {
                    ... on PrismicPage {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const MainWrapper = styled.main`
    margin: 0 auto;
  `
  const Header = styled.header`
    height: 8vh;
    display: flex;
    background: black;
    padding: 0 16px;
    align-items: center;
  `
  const NavLinks = styled.div`
    margin-left: auto;
    display: flex;
  `
  const NavLink = styled.div`
    a {
      color: white;
      padding: 0 16px;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        color: orange;
        text-decoration: underline;
      }
    }
  `
  const Branding = styled.div`
    color: orange;
    font-weight: bold;
    margin: auto 0;
    font-size: 18px;
  `

  const navigationLinks =
    data.allPrismicNavigation.edges[0].node.data.navigation_links
  return (
    <>
      <Header>
        <Branding>
          {data.allPrismicNavigation.edges[0].node.data.branding}
        </Branding>
        <NavLinks>
          {navigationLinks.map(link => {
            return (
              <NavLink key={link.link.document.uid}>
                <Link to={`/${link.link.document.uid}`}>{link.label}</Link>
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
