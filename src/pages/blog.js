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
  console.log(data.allPrismicBlogHomepage.edges[0].node.data.hero_image.fluid)
  const blogHome = data.allPrismicBlogHomepage.edges[0].node.data
  return (
    <Layout>
      <SEO
        title="Web Design and Development Blog | Uplift Digital Solutions, Los Angeles, CA Based Web Design, Development, SEO and Content Management."
        description="Uplift Digital Solutions | We write blogs encompassing the topics of Web Design and Development, Business Tips, SEO, importance of social media, content creation any many more."
      />

      <div
        className="bg-local h-96 bg-no-repeat bg-cover w-full flex items-center justify-center "
        style={{
          backgroundImage: `url(${data.allPrismicBlogHomepage.edges[0].node.data.hero_image.fluid.src})`,
        }}
        // style={`background-image: url(${data.allPrismicBlogHomepage.edges[0].node.data.hero_image.fluid.srcSet})`}
      >
        <div
          className="flex flex-col text-center justify-center items-center text-white drop-shadow p-5"
          style={{
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <RichTextCustom render={blogHome.title.raw} />
          <RichTextCustom render={blogHome.subtitle.raw} />
        </div>
      </div>
      {/* <img
        className="object-cover w-full h-96"
        srcSet={
          data.allPrismicBlogHomepage.edges[0].node.data.hero_image.fluid.srcSet
        }
      /> */}
      {/* <HeroWrapper
          Tag="section"
          fluid={
            data.allPrismicBlogHomepage.edges[0].node.data.hero_image.fluid
          }
          backgroundColor={`#040e18`}
        >
          <div>
            <RichTextCustom render={blogHome.title.raw} />
            <RichTextCustom render={blogHome.subtitle.raw} />
          </div>
        </HeroWrapper> */}

      <BlogPreviewGrid>
        {data.allPrismicBlogPost.edges.map(({ node }, i) => {
          return (
            <div className="blog-preview rounded-md my-5 shadow-2xl bg-white mx-auto w-3/4 flex flex-col lg:flex-row justify-between p-5  items-center">
              <img
                src={node.data.body[0].primary.image.url}
                alt="Blog Preview media"
                title="Blog Home Page Image"
                className="w-96 object-cover "
              />
              <div>
                <p className="blog-preview-date">{node.data.release_date}</p>

                <RichTextCustom
                  render={node.data.title.raw}
                  className="text-2xl"
                />

                <RichTextCustom
                  render={node.data.preview_description.raw}
                  className="text-lg"
                />

                <Link to={node.uid} className="hover:text-red-400">
                  Read More
                </Link>
              </div>
            </div>
          )
        })}
      </BlogPreviewGrid>
    </Layout>
  )
}

export default BlogHomePage
