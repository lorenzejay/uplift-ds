import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import RichTextCustom from "../components/richText"
import Button from "../components/button"

const BlogHomepageWrapper = styled.section``

const HeroWrapper = styled(BackgroundImage)`
  height: 45vh;
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

    padding: 2%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
const BlogPreviewGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5vw;
  padding: 5%;
  .blog-preview {
    display: flex;
    gap: 5vw;
    height: 50vh;
    width: 65vw;
    padding: 5%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    .blog-preview-title {
      height: 7vh;

      h1 {
        font-size: 1rem;
        color: #ea6354;
      }
    }

    p {
      font-size: 0.8rem;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin: 5px 0 15px;
    }
    a {
      margin: 0;
      font-size: 0.8rem;
      color: #333;
    }
  }
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
            }
          }
        }
      }
      allPrismicBlogPost {
        edges {
          node {
            data {
              body {
                ... on PrismicBlogPostBodyImage {
                  primary {
                    image {
                      url
                    }
                  }
                }
              }
              title {
                raw
              }
              release_date
              preview_description {
                raw
              }
            }
            uid
          }
        }
      }
    }
  `)
  console.log(data.allPrismicBlogPost.edges)
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
          </div>
        </HeroWrapper>
      </BlogHomepageWrapper>
      <BlogPreviewGrid>
        {data.allPrismicBlogPost.edges.map(({ node }, i) => {
          console.log(node)
          return (
            <div className="blog-preview">
              <img
                src={node.data.body[0].primary.image.url}
                style={{ width: "40%", objectFit: "cover" }}
              />
              <div>
                <p style={{ fontSize: 13, color: "grey" }}>
                  {node.data.release_date}
                </p>
                <div className="blog-preview-title">
                  <RichTextCustom render={node.data.title.raw} />
                </div>
                <RichTextCustom
                  render={node.data.preview_description.raw}
                  className="blog-preview-text"
                />

                <Link to={node.uid}>Read More</Link>
              </div>
            </div>
          )
        })}
      </BlogPreviewGrid>
    </Layout>
  )
}

export default BlogHomePage
