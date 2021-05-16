import React from "react"
import RichTextCustom from "../richText"
import { FeaturedBlockWrapper } from "../../styles/featured_styles"

const FeaturedBlock = ({ title, content, image, darkMode }) => {
  return (
    <FeaturedBlockWrapper
      data-aos="fade-up"
      darkMode={darkMode}
      className="rounded-lg p-4 h-auto w-80 mx-auto"
    >
      <div className="featured-image-wrapper">
        <img src={image} alt="featured" className="mx-auto w-48 object-cover" />
      </div>
      <div className="featured-title text-center">
        <RichTextCustom render={title} />
      </div>
      <div className="featured-content text-center">
        <RichTextCustom render={content} />
      </div>
    </FeaturedBlockWrapper>
  )
}

export default FeaturedBlock
