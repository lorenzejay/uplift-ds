import React from "react"
import CallToActionGrid from "../callToActionGrid"
import Hero from "../hero"
import PriceList from "../PriceList"
import "./styles.scss"
const SliceZone = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map((bodyContent, i) => {
        // console.log(bodyContent)
        if (bodyContent.slice_type === "hero") {
          return (
            <Hero
              backgroundImage={bodyContent.primary.background_image.url}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              key={i}
            />
          )
        } else if (bodyContent.slice_type === "call_to_action_grid") {
          return (
            <CallToActionGrid
              key={i}
              callToActions={bodyContent.items}
              title={bodyContent.primary.section_title}
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
