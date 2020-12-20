import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  BlogPreviewGrid,
  HeroWrapper,
  BlogHomepageWrapper,
} from "../styles/blog_styles"
import RichTextCustom from "../components/richText"
import SEO from "../components/seo"

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
  // console.log(data.allPrismicBlogPost.edges)
  const blogHome = data.allPrismicBlogHomepage.edges[0].node.data
  return (
    <Layout>
      <SEO
        title="Uplift | Blog"
        description="Uplift Digital Solutions | We write blogs encompassing the topics of buisness tips, SEO, importance of social media, digital development any many more."
      />
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
          return (
            <div className="blog-preview">
              <img
                src={node.data.body[0].primary.image.url}
                alt="Blog Preview media"
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
