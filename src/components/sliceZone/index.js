import React from "react"
import CtaGrid from "../ctaGrid"
import FeaturedGrid from "../featuredGrid"
import Hero from "../hero"
import PriceList from "../PriceList"
import "./styles.scss"
const SliceZone = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.slice_type === "hero") {
          return (
            <Hero
              backgroundImage={bodyContent.primary.background_image.fluid}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              key={i}
            />
          )
        } else if (bodyContent.slice_type === "featured_grid") {
          return (
            <FeaturedGrid
              key={i}
              featuredItems={bodyContent.items}
              title={bodyContent.primary.section_title}
            />
          )
        } else if (bodyContent.slice_type === "call_to_actions") {
          return (
            <CtaGrid
              key={i}
              title={bodyContent.primary.section_title}
              ctaItems={bodyContent.items}
            />
          )
        } else if (bodyContent.slice_type === "price_list") {
          return (
            <PriceList
              key={i}
              title={bodyContent.primary.title1.raw}
              pricingList={bodyContent.items}
            />
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone
