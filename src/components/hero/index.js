import React from "react"
import { RichText } from "prismic-reactjs"

const Hero = ({ title, content }) => {
  console.log(title)
  return (
    <div>
      <RichText render={title.raw} />
      <p>{content}</p>
    </div>
  )
}

export default Hero
