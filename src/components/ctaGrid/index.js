import React from "react"
import { CtaCard, CtaWrapper } from "../../styles/cta_styles"
import RichTextCustom from "../richText"

const CtaGrid = ({ title, ctaItems }) => {
  return (
    <CtaWrapper>
      <RichTextCustom render={title} />
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
              style={{ width: 400, height: 325, borderRadius: 10 }}
            />
          </CtaCard>
        )
      })}
    </CtaWrapper>
  )
}

export default CtaGrid
