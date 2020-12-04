import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

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
      }
    }
  }
`

export default function Pages(props) {
  const {
    data: { prismicPage },
  } = props
  console.log(prismicPage)
  return (
    <>
      <h1>{prismicPage.data.page_title.text}</h1>
    </>
  )
}
