import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import RichTextCustom from "../components/richText"
import styled from "styled-components"

export const query = graphql`
  query BlogPostQuery($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
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

export default function BlogPosts(props) {
  const {
    data: { prismicBlogPost },
  } = props
  console.log(prismicBlogPost)
  //   const blogPostData = props.data.allPrismicBlogPost.edges[0].node.data
  //   console.log(props.data.allPrismicBlogPost.edges[0].node.data.body)
  return (
    <Layout>
      <BlogPostWrapper>
        <RichTextCustom render={prismicBlogPost.data.title.raw} />
        <p>{prismicBlogPost.data.release_date}</p>
        <div>
          <RichTextCustom
            render={prismicBlogPost.data.body[0].primary.text.raw}
          />
          <RichTextCustom
            render={prismicBlogPost.data.body[1].primary.quote.raw}
          />
        </div>
      </BlogPostWrapper>
    </Layout>
  )
}
