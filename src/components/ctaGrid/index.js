import React from "react"
import { CtaCard, CtaWrapper } from "../../styles/cta_styles"
import RichTextCustom from "../richText"
import Button from "../button/index"
import { Link } from "gatsby"
import "aos/dist/aos.css"

const CtaGrid = ({ title, ctaItems }) => {
  return (
    <CtaWrapper>
      <RichTextCustom render={title} />
      <div className="card-wrapper">
        {ctaItems.map((item, i) => {
          return (
            <section
              key={i}
              index={i}
              className={`flex flex-col md:flex-row items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                data-aos="fade-right"
                className={`cta-card-text flex flex-col ${
                  i % 2 !== 0 ? "mr-3" : "ml-3"
                }`}
              >
                <RichTextCustom render={item.cta_section_title.raw} />
                <RichTextCustom
                  render={item.cta_section_content.raw}
                  className="cta-text-content w-1/2 leading-relaxed"
                />
              </div>
              <img
                data-aos="fade-left"
                src={item.cta_image.url}
                alt="Web Design and Developement - Our Process"
                title="Uplift Digitial Solutions - Our Process"
                className="w-1/2 object-cover"
              />
            </section>
          )
        })}
        <Link to="/contact-us">
          <Button>Request Quote</Button>
        </Link>
      </div>
    </CtaWrapper>
  )
}

export default CtaGrid
