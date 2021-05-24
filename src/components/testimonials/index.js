import React from "react"
import RichTextCustom from "../richText"
// import "bootstrap/dist/css/bootstrap.min.css"
import {
  TestimonialWrapper,
  TestimonialImgAndQuote,
  ImageCropper,
} from "../../styles/testimonial_styles"
// import { Carousel } from "react-bootstrap"

const Testimonials = ({ title, testimonials }) => {
  return (
    <TestimonialWrapper>
      <RichTextCustom render={title.raw} />
      {/* <Carousel indicators={false}>
        {testimonials.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <TestimonialImgAndQuote>
                <ImageCropper>
                  <img
                    src={item.author_image.url}
                    alt="Testimonial Author"
                    title="Testimonials - What our clients have said."
                  />
                </ImageCropper>
                <RichTextCustom render={item.testimonial_author.raw} />
                <RichTextCustom render={item.testimonial_content.raw} />
              </TestimonialImgAndQuote>
            </Carousel.Item>
          )
        })}
      </Carousel> */}
    </TestimonialWrapper>
  )
}

export default Testimonials
