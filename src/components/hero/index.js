import React from "react"
import RichTextCustom from "../richText"
import { Link } from "gatsby"
import Button from "../button"
import { HeroWrapper } from "../../styles/hero_styles"

const Hero = ({ title, content, backgroundImage }) => {
  return (
    <HeroWrapper className="hero-wrapper">
      <div className="hero-text">
        <RichTextCustom render={title.raw} />
        <p>{content}</p>
        <Button>
          <Link to="/contact-us">Contact Us</Link>
        </Button>
      </div>
      <img src={backgroundImage} alt="Hero" />
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
