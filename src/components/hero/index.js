import React from "react"
import RichTextCustom from "../richText"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import Button from "../button"
const HeroWrapper = styled.div`
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #333;
  padding: 0 5%;
  background: #c6f3f8;
  gap: 5vw;
  .hero-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
      width: 75%;
      text-align: center;
    }
  }
  button {
    background: #ea6354;
    a {
      color: white;
    }
  }
`
const Hero = ({ title, content, backgroundImage, className }) => {
  return (
    <HeroWrapper>
      <div className="hero-text">
        <RichTextCustom render={title.raw} />
        <p>{content}</p>
        <Button>
          <Link to="/contact-us">Contact Us</Link>
        </Button>
      </div>
      <img src={backgroundImage} style={{ width: "40%" }} />
    </HeroWrapper>

    // <HeroWrapper backgroundImage={backgroundImage}>
    //   <div>
    //     <RichTextCustom render={title.raw} />
    //     <p>{content}</p>
    //   </div>
    // </HeroWrapper>
  )
}

export default Hero
