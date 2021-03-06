import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import RichTextCustom from "../components/richText"
import { AboutWrapper } from "../styles/about_styles"
import SEO from "../components/seo"

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
      <SEO
        title="About Us | Uplift Digital Solutions, Los Angeles, CA Based Web Design, Development, SEO and Content Management."
        description="Uplift Digital Solutions | Learn more about us, our philosophy of the importance of websites and how we build them."
      />
      <AboutWrapper>
        <div className="about-hero">
          <RichTextCustom render={aboutData.about_title.raw} />
        </div>
        <div className="about-img-content">
          <img
            src={aboutData.about_image.url}
            alt="Rockets Flying in the Air."
            title="About Us Image"
          />
          <RichTextCustom render={aboutData.about_content.raw} />
        </div>
      </AboutWrapper>
    </Layout>
  )
}

export default About
