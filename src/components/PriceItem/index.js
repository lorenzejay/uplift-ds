import { RichText } from "prismic-reactjs"
import React from "react"
import styled from "styled-components"

const PricingCardWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 10px;
  padding: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: ${p => (p.mostPopular ? "orange" : "eee")};
  color: ${p => (p.mostPopular ? "white" : "#333333")};
  padding: 10px;
  position: relative;
  .most-popular {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    background: green;
    color: white;
    font-weight: bold;
  }
  .price {
    font-size: 30px;
    padding: 10px 0;
    text-align: center;
    margin: auto -10px;
    span {
      font-size: 12px;
    }
    p {
      background: #676767;
      color: white;
      padding: 8px 0;
    }
  }
  .description {
    margin-top: 20px;
  }
`

const PriceItem = ({ price, features, title, mostPopular }) => {
  console.log("most popular", mostPopular)

  return (
    <PricingCardWrapper mostPopular={mostPopular}>
      {mostPopular && <div className="most-popular">Most Popular</div>}
      <RichText render={title} />
      <div className="price">
        <p>
          {price === 0 ? "Free" : `$${price}`}{" "}
          {price > 0 && <span>/month</span>}
        </p>
      </div>
      <div className="description">
        <RichText render={features} />
      </div>
    </PricingCardWrapper>
  )
}

export default PriceItem
