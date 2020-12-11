import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import RichTextCustom from "../components/richText"

const BlogHomepageWrapper = styled.section`
  height: 100vh;
`

const HeroWrapper = styled(BackgroundImage)`
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  /* div {
    max-width: 800px;
    margin: 0 auto;
    padding: 2%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  } */
`
const BlogHomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicBlogHomepage {
        edges {
          node {
            data {
              title {
                raw
              }
              subtitle {
                raw
              }
              cta_link {
                raw
              }
              cta_text
              hero_image {
                url
                fluid {
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
              body {
                ... on PrismicBlogHomepageBodyFeaturedPosts {
                  id
                  slice_type
                  primary {
                    title1 {
                      raw
                    }
                  }
                  items {
                    cta_text1
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allPrismicBlogHomepage.edges[0].node.data)
  const blogHome = data.allPrismicBlogHomepage.edges[0].node.data
  return (
    <Layout>
      <BlogHomepageWrapper>
        <HeroWrapper
          Tag="section"
          className={""}
          fluid={
            data.allPrismicBlogHomepage.edges[0].node.data.hero_image.fluid
          }
          backgroundColor={`#040e18`}
        >
          <div>
            <RichTextCustom render={blogHome.title.raw} />
            <RichTextCustom render={blogHome.subtitle.raw} />
            <button>
              <Link to={blogHome.cta_link.raw.uid}>{blogHome.cta_text}</Link>
            </button>

            {/* <Link render/> */}
          </div>
        </HeroWrapper>
      </BlogHomepageWrapper>
    </Layout>
  )
}

export default BlogHomePage
