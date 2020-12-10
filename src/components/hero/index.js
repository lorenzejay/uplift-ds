import React from "react"
import RichTextCustom from "../richText"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
const HeroWrapper = styled(BackgroundImage)`
  height: calc(100vh - 10vh);
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  div {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.5);
    padding: 2%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
const Hero = ({ title, content, backgroundImage, className }) => {
  return (
    <HeroWrapper
      Tag="section"
      className={""}
      fluid={backgroundImage}
      backgroundColor={`#040e18`}
    >
      <div>
        <RichTextCustom render={title.raw} />
        <p>{content}</p>
      </div>
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
