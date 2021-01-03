import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SliceZone from "../components/sliceZone"
import SEO from "../components/seo"
import AOS from "aos"
import "aos/dist/aos.css"

const IndexPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
    AOS.refresh()
  }, [])
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
                      fluid(maxWidth: 1920) {
                        src
                        srcSet
                      }
                    }
                  }
                }
                ... on PrismicHomepageBodyCallToActions {
                  id
                  slice_type
                  primary {
                    call_to_actions_title {
                      raw
                    }
                  }
                  items {
                    cta_section_title {
                      raw
                    }
                    cta_section_content {
                      raw
                    }
                    cta_image {
                      url
                    }
                  }
                }
                ... on PrismicHomepageBodyFeaturedGrid {
                  id
                  slice_type
                  primary {
                    section_title {
                      raw
                    }
                  }
                  items {
                    feature_title {
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
                ... on PrismicHomepageBodyCallToActions {
                  id
                  slice_type
                  primary {
                    call_to_actions_title {
                      raw
                    }
                  }
                  items {
                    cta_section_title {
                      raw
                    }
                    cta_section_content {
                      raw
                    }
                    cta_image {
                      url
                    }
                  }
                }
                ... on PrismicHomepageBodyTestimonials {
                  id
                  slice_type
                  primary {
                    testimonial_section_title {
                      raw
                    }
                  }
                  items {
                    author_job
                    testimonial_author {
                      raw
                    }
                    testimonial_content {
                      raw
                    }

                    author_image {
                      url
                    }
                  }
                }
                ... on PrismicHomepageBodyWorksDisplay {
                  slice_type
                  primary {
                    works_title {
                      raw
                    }
                  }
                  items {
                    works_title {
                      raw
                    }
                    works_description {
                      raw
                    }
                    works_link {
                      raw
                      url
                    }
                    works_image {
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
      <SEO
        title="Uplift | Los Angeles, California based Web Design and Development Services"
        description="Uplift Digital Solutions | Specializes in Web Design, Development, and SEO. Based in Los Angeles."
      />
      <SliceZone body={data.allPrismicHomepage.edges[0].node.data.body} />
    </Layout>
  )
}
export default IndexPage
