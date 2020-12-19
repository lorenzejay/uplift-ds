import React from "react"
import "./styles.scss"
import RichTextCustom from "../richText"
import {
  TestimonialAuthorAndLink,
  TestimonialCard,
  TestimonialImgAndQuote,
  TestimonialProfile,
  TestimonialWrapper,
  ImageCropper,
} from "../../styles/testimonial_styles"

const Testimonials = ({ title, testimonials }) => {
  return (
    <TestimonialWrapper>
      <RichTextCustom render={title.raw} />
      {testimonials.map((item, i) => {
        return (
          <TestimonialCard key={i} index={i}>
            <TestimonialImgAndQuote>
              <TestimonialProfile>
                <ImageCropper>
                  <img src={item.author_image.url} alt={"testimonial writer"} />
                </ImageCropper>
                <TestimonialAuthorAndLink>
                  <RichTextCustom render={item.testimonial_author.raw} />
                  <p>{item.author_job}</p>
                </TestimonialAuthorAndLink>
              </TestimonialProfile>

              <RichTextCustom render={item.testimonial_content.raw} />
            </TestimonialImgAndQuote>
          </TestimonialCard>
        )
      })}
    </TestimonialWrapper>
  )
}

export default Testimonials
