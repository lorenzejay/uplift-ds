import React from "react"
import styled from "styled-components"
import RichTextCustom from "../richText"

const PricingCardWrapper = styled.div`
  border-radius: 10px;
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  img {
    width: 150px;
  }

  .price {
    font-size: 30px;
    text-align: center;
    .price,
    .description {
      padding: 5%;
    }
    span {
      font-size: 12px;
    }
    p {
      padding: 8px 0;
    }
  }
  .description {
    margin-top: 30px;
    height: 40vh;
    align-items: center;
    p {
      font-size: 14px;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 3vh;
    }
    li {
      list-style: none;
      font-size: 16px;
    }
    li::before {
      content: "✓  ";
    }
  }
`

const PriceItem = ({ price, features, title, mostPopular, image }) => {
  return (
    <PricingCardWrapper>
      <img src={image} alt={features} />
      <RichTextCustom render={title} />
      <div className="description">
        <RichTextCustom render={features} />
      </div>
      <div className="price">
        <p>
          {price === 0 ? "Free" : `$${price}`}
          {price > 0 && <span>/month</span>}
        </p>
      </div>
    </PricingCardWrapper>
  )
}

export default PriceItem
