import React from "react"
import { Link as LinkG } from "gatsby"
import PropTypes from "prop-types"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa"

export const Nav = styled.header`
  //handle transitions here
  /* background: #fff; */

  height: 80px;
  margin-top: -80px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 60;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 5vw;
  @media screen and (min-width: 1024px) {
    padding: 0 10vw;
  }
  /* max-width: 1100px; */
`

//we are grabbing the link from gatsby link
// export const NavLink = styled(LinkG)`
//   color: ${props => (props.homePage ? "#fff" : "#000")};
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 6px;
//   font-weight: bold;
//   text-decoration: none;
//   text-transform: uppercase;
//   letter-spacing: 5px;
//   &:hover {
//     text-decoration: none;
//     color: #ea5454;
//   }
// `
export const NavLogo = styled(LinkG)`
  color: ${props => (props.homepage ? "#fff" : "#000")};
  text-decoration: none;
  display: grid;
  margin-top: 40px;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 32px;
  &:hover {
    color: #ea5454;
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: none;
  color: ${props => (props.homepage ? "#fff" : "#000")};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 35%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  margin-top: auto;
  height: 100%;
  .darkmode-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

//scroll links
export const NavLinks = styled(LinkG)`
  color: ${props => (props.homepage ? "#fff" : "#000")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: ${props => (props.homepage ? "#fff" : "#000")};
    text-decoration: none;
  }
`

const Header = ({ theme, themeToggler, toggle, homepage }) => {
  // console.log(homepage)
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/" homepage={homepage} style={{ letterSpacing: 5 }}>
            Uplift
          </NavLogo>

          <MobileIcon onClick={toggle} homepage={homepage}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <span className="darkmode-btn" homepage={homepage}>
              {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
              {theme === "dark" ? (
                <FaLightbulb
                  onClick={themeToggler}
                  className="icon"
                  homepage={homepage}
                  style={{ color: homepage ? "#fff" : "#000" }}
                />
              ) : (
                <FaRegLightbulb
                  onClick={themeToggler}
                  className="icon"
                  homepage={homepage}
                  style={{ color: homepage ? "#fff" : "#000" }}
                />
              )}
            </span>
            <NavItem>
              <NavLinks to="/about" homepage={homepage}>
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/contact-us" homepage={homepage}>
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/blog" homepage={homepage}>
                Blog
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  homepage: false,
}

export default Header
