import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import RichTextCustom from "../richText"

const FeaturedBlockWrapper = styled.section`
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  border-radius: 10px;
  height: 55vh;
  width: 23vw;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: #ea6354 4px solid;

  .featured-content {
    display: flex;
    align-items: center;
  }
  .featured-image-wrapper {
    border-radius: 10px;
    margin: auto 10px;
  }
  .featured-title {
    width: 100%;
    text-align: center;
  }
`

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
