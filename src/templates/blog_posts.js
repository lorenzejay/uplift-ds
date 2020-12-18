import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import RichTextCustom from "../components/richText"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Date } from "prismic-reactjs"

export const query = graphql`
  query BlogPostQuery($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
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
const BlogPostWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BlogPostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    h1 {
      font-size: 2.4rem;
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
