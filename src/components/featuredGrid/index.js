import React from "react"
import RichTextCustom from "../richText"
import FeaturedBlock from "../featuredBlock"
import {
  FeaturedGrid3,
  FeaturedSectionWrapper,
} from "../../styles/featured_styles"

const FeaturedGrid = ({ featuredItems, title, darkMode }) => {
  return (
    <FeaturedSectionWrapper darkMode={darkMode}>
      {title && <RichTextCustom render={title.raw} />}
      <FeaturedGrid3 className="flex flex-col justify-center lg:grid lg:grid-cols-3 lg:justify-start">
        {featuredItems.map((item, i) => {
          return (
            <div key={i}>
              <FeaturedBlock
                darkMode={darkMode}
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
