import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { RichText } from "prismic-reactjs"

export const query = graphql`
  query pageQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          html
          raw
          text
        }
        content {
          html
          raw
          text
        }
      }
    }
  }
`

export default function Pages(props) {
  const {
    data: { prismicPage },
  } = props

  //use the raw object in rich text
  return (
    <Layout>
      <RichText render={prismicPage.data.page_title.raw} />
      <RichText render={prismicPage.data.content.raw} />
    </Layout>
  )
}
