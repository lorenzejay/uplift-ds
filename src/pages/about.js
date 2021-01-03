import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import RichTextCustom from "../components/richText"
import { AboutWrapper } from "../styles/about_styles"

const About = () => {
  const data = useStaticQuery(graphql`
    query About {
      allPrismicAbout {
        edges {
          node {
            data {
              about_title {
                raw
              }
              about_content {
                raw
              }
              about_image {
                url
              }
            }
          }
        }
      }
    }
  `)
  // console.log(data.allPrismicAbout.edges[0].node.data)
  const aboutData = data.allPrismicAbout.edges[0].node.data
  return (
    <Layout>
      <AboutWrapper>
        <div className="about-hero">
          <RichTextCustom render={aboutData.about_title.raw} />
        </div>
        <div className="about-img-content">
          <img
            src={aboutData.about_image.url}
            alt="Rockets Flying in the Air."
          />
          <RichTextCustom render={aboutData.about_content.raw} />
        </div>
      </AboutWrapper>
    </Layout>
  )
}

export default About
