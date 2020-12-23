import React from "react"
import styled from "styled-components"
import { RiLinkedinFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri"
import { Link } from "gatsby"

const FooterWrapper = styled.section`
  background: #ea6354;
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .social-links {
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
  }
  a {
    color: #333;
    display: grid;
    margin: auto 0;
    text-decoration: none;
  }
`

const SocialWrapper = styled.span`
  background-color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 2px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PageLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  a {
    font-size: 14px;
    color: white;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="social-links">
        <SocialWrapper>
          <a href="https://www.linkedin.com/in/lorenze-hernandez-93aab3175/">
            <RiLinkedinFill />
          </a>
        </SocialWrapper>

        <SocialWrapper>
          <a href="https://twitter.com/lorenzejayTech">
            <RiTwitterFill />
          </a>
        </SocialWrapper>

        <SocialWrapper>
          <a href="https://www.instagram.com/uplift.digitalsolutions/">
            <RiInstagramFill />
          </a>
        </SocialWrapper>
      </div>
      <div>
        <p style={{ color: "white" }}>
          <span role="img" aria-label="rocketship emoji">
            🚀
          </span>{" "}
          Uplifting you from the competition.
        </p>
      </div>
      <PageLinks>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/blog">Blog</Link>
      </PageLinks>
    </FooterWrapper>
  )
}

export default Footer
