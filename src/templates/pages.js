import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { RichText } from "prismic-reactjs"
import SliceZone from "../components/sliceZone/index"

export const query = graphql`
  query pageQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          raw
          html
          text
        }
        content {
          raw
          html
          text
        }
        body {
          ... on PrismicPageBodyCallToActionGrid {
            slice_type
            id
            primary {
              section_title {
                raw
                html
                text
              }
            }
            items {
              button_label
              button_destination {
                uid
                slug
              }
              content {
                raw
                html
                text
              }
              featured_image {
                url
              }
              call_to_action_title {
                raw
                html
                text
              }
            }
          }
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
  console.log(prismicPage.data.body)

  //use the raw object in rich text
  return (
    <Layout>
      <RichText render={prismicPage.data.page_title.raw} />
      <RichText render={prismicPage.data.content.raw} />
      <SliceZone body={prismicPage.data.body} />
    </Layout>
  )
}
