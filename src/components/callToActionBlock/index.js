import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import RichTextCustom from "../richText"

const CallToActionBlockWrapper = styled.section`
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  .call-to-action-content {
    display: flex;
    align-items: center;
    .featured-image-wrapper {
      border-radius: 10px;
      margin: auto 10px;
    }
    img {
      max-width: 250px;
      margin: 0;
    }
  }
`
const Button = styled.button`
  background: orange;
  border-radius: 5px;
  border: none;
  outline: none;

  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 5px 15px;
  }
`

const CallToActionBlock = ({
  buttonLabel,
  buttonDestination,
  title,
  content,
  image,
}) => {
  return (
    <CallToActionBlockWrapper>
      <RichTextCustom render={title} />
      <div className="call-to-action-content">
        <RichTextCustom render={content} />
        <div className="featured-image-wrapper">
          <img src={image} alt="featured" />
        </div>
      </div>

      <Button>
        <Link to={`/${buttonDestination}`}>{buttonLabel}</Link>
      </Button>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
