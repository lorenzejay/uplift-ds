import React from "react"
import RichTextCustom from "../richText"
import { FeaturedBlockWrapper } from "../../styles/featured_styles"

const FeaturedBlock = ({ title, content, image }) => {
  return (
    <FeaturedBlockWrapper>
      <div className="featured-image-wrapper">
        <img src={image} alt="featured" style={{ width: 150 }} />
      </div>
      <div className="featured-title">
        <RichTextCustom render={title} />
      </div>
      <div className="featured-content">
        <RichTextCustom render={content} />
      </div>
    </FeaturedBlockWrapper>
  )
}

export default FeaturedBlock
