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
          <Link to="/contact-us">
            <button className="bg-gray-400 text-white rounded-md hover:bg-red-400 transition-all duration-200 ease-in px-3 py-1">
              Contact Us
            </button>
          </Link>
        </div>
        <img
          src={backgroundImage}
          alt="Hero"
          title="Uplift Digital Solutions Main Image"
        />
      </div>
    </HeroWrapper>
  )
}

export default Hero
