import React, { useEffect } from "react"
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
    <Layout homepage={true}>
      <SEO
        title="Los Angeles Web Design and Development | Uplift Digital Solutions"
        description="Uplift Digital Solutions specializes in Web Design and Development, SEO and content management based in Los Angeles, California. Our websites are built focused on being a tool to grow your business."
      />
      <SliceZone body={data.allPrismicHomepage.edges[0].node.data.body} />
    </Layout>
  )
}
export default IndexPage
