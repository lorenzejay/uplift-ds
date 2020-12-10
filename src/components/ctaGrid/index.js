import React from "react"
import styled from "styled-components"
import RichTextCustom from "../richText"

const CtaWrapper = styled.section`
  width: 100%;
  padding: 5%;
`
const CtaCard = styled.div`
  margin: 3vh 0;
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  align-items: center;
  .cta-card-text {
    h4::before {
      content: "🚀  ";
    }
    p {
      width: 85%;
    }
  }
`

const CtaGrid = ({ title, ctaItems }) => {
  console.log(ctaItems)
  return (
    <CtaWrapper>
      {ctaItems.map((item, i) => {
        return (
          <CtaCard key={i} index={i}>
            <div className="cta-card-text">
              <RichTextCustom render={item.cta_section_title.raw} />
              <RichTextCustom render={item.cta_section_content.raw} />
            </div>
            <img
              src={item.cta_image.url}
              alt={item.cta_section_title.raw}
              style={{ width: 550 }}
            />
          </CtaCard>
        )
      })}
    </CtaWrapper>
  )
}

export default CtaGrid
