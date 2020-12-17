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
  color: white;
  padding: 0 3%;
  background: #ea6354;
  gap: 5vw;
  /* div {
    max-width: 800px;
    margin: 0 auto;
    padding: 2%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  } */
`
const Hero = ({ title, content, backgroundImage, className }) => {
  return (
    <HeroWrapper>
      <div>
        <RichTextCustom render={title.raw} />
        <p>{content}</p>
        <Button>
          <Link to="/contact-us">Request Quote</Link>
        </Button>
      </div>
      <img src={backgroundImage} style={{ width: "50%" }} />
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
