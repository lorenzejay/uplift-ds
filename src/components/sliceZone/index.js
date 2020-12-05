import React from "react"
import Hero from "../hero"
import "./styles.scss"
const SliceZone = ({ body }) => {
  return (
    <div>
      {body.map((bodyContent, i) => {
        console.log(bodyContent)
        if (bodyContent.slice_type === "hero") {
          return (
            <Hero
              backgroundImage={bodyContent.primary.background_image.url}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              key={i}
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
