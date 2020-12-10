import React from "react"
import "./styles.scss"
import RichTextCustom from "../richText"
import styled from "styled-components"
import FeaturedBlock from "../featuredBlock"

const FeaturedSectionWrapper = styled.section`
  width: 100%;
  padding: 5%;
  margin: 0 auto;
`
const FeaturedGrid3 = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`

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
