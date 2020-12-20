import React from "react"
import "./styles.scss"
import RichTextCustom from "../richText"
import FeaturedBlock from "../featuredBlock"
import {
  FeaturedGrid3,
  FeaturedSectionWrapper,
} from "../../styles/featured_styles"

const FeaturedGrid = ({ featuredItems, title }) => {
  return (
    <FeaturedSectionWrapper>
      {title && <RichTextCustom render={title.raw} />}
      <FeaturedGrid3>
        {featuredItems.map((item, i) => {
          return (
            <div key={i}>
              <FeaturedBlock
                title={item.feature_title.raw}
                content={item.content.raw}
                image={item.featured_image.url}
              />
            </div>
          )
        })}
      </FeaturedGrid3>
    </FeaturedSectionWrapper>
  )
}

export default FeaturedGrid
