import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RichTextCustom from "../components/richText"
import { BlogPostWrapper, BlogPostHeader } from "../styles/blog_styles"
import { Date } from "prismic-reactjs"
import SEO from "../components/seo"

export const query = graphql`
  query BlogPostQuery($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        preview_description {
          text
        }
        author
        title {
          raw
        }
        release_date
        body {
          ... on PrismicBlogPostBodyText {
            id
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicBlogPostBodyQuote {
            id
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicBlogPostBodyImage {
            id
            primary {
              image {
                url
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default function BlogPosts(props) {
  const {
    data: { prismicBlogPost },
  } = props
  console.log(prismicBlogPost)

  const date = Date(prismicBlogPost.data.release_date)
  const formattedDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date)

  return (
    <Layout>
      <SEO
        title={`Uplift | ${prismicBlogPost.data.title.raw[0].text}`}
        description={`Uplift Digital Solutions | ${prismicBlogPost.data.preview_description.text}`}
      />
      <BlogPostWrapper>
        <BlogPostHeader>
          <div>
            <RichTextCustom render={prismicBlogPost.data.title.raw} />
            <p>{formattedDate}</p>
            <p>By {prismicBlogPost.data.author}</p>
          </div>

          <img
            src={prismicBlogPost.data.body[0].primary.image.url}
            style={{ width: "45%" }}
            alt="blog post hero"
          />
        </BlogPostHeader>
        <div>
          <RichTextCustom
            render={prismicBlogPost.data.body[1].primary.text.raw}
          />
        </div>
      </BlogPostWrapper>
    </Layout>
  )
}
