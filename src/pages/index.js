import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicHomepage {
        edges {
          node {
            data {
              body {
                ... on PrismicHomepageBodyHero {
                  id
                  slice_type
                  primary {
                    hero_content
                    hero_title {
                      html
                      raw
                      text
                    }
                    background_image {
                      url
                    }
                  }
                }
                ... on PrismicHomepageBodyCallToActionGrid {
                  id
                  primary {
                    section_title {
                      html
                      raw
                      text
                    }
                  }
                  slice_type
                  items {
                    button_label
                    button_destination {
                      uid
                      slug
                    }
                    call_to_action_title {
                      raw
                    }
                    content {
                      raw
                    }
                    featured_image {
                      url
                    }
                  }
                }
                ... on PrismicHomepageBodyPriceList {
                  slice_type
                  primary {
                    title1 {
                      raw
                    }
                  }
                  items {
                    image {
                      url
                    }
                    price_list_title {
                      raw
                    }
                    price_list_description {
                      raw
                    }
                    price_of_service
                    price_type
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SliceZone body={data.allPrismicHomepage.edges[0].node.data.body} />
    </Layout>
  )
}
export default IndexPage
