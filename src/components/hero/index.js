import React from "react"
import RichTextCustom from "../richText"
import { graphql, Link, useStaticQuery } from "gatsby"
import Button from "../button"
import { HeroWrapper } from "../../styles/hero_styles"

const Hero = ({ title, content, backgroundImage }) => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "homebg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <HeroWrapper
      className="hero-wrapper"
      fluid={data.bgImage.childImageSharp.fluid}
    >
      <span className="blackOverlay"></span>
      <div className="hero-content">
        <div className="hero-text">
          <RichTextCustom render={title.raw} />
          <p>{content}</p>
          <Button>
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
        <img src={backgroundImage} alt="Hero" />
      </div>
    </HeroWrapper>
  )
}

export default Hero
