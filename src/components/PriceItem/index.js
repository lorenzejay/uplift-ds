import React from "react"
import styled from "styled-components"
import RichTextCustom from "../richText"

const PricingCardWrapper = styled.div`
  border-radius: 10px;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  /* background: ${p => (p.mostPopular ? "orange" : "eee")};
  color: ${p => (p.mostPopular ? "white" : "#333333")}; */
  /* height: ${p => (p.mostPopular ? "100vh" : "85vh")};
  padding: ${p => (p.mostPopular ? "calc(40px + 7.5vh) 0" : "40px 0")}; */
  text-align: center;

  /* .most-popular {
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
    background: green;
    color: white;
    font-weight: bold;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  } */
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

const PriceItem = ({ price, features, title, mostPopular }) => {
  console.log("most popular", mostPopular)

  return (
    <PricingCardWrapper mostPopular={mostPopular}>
      {/* {mostPopular && <div className="most-popular">Most Popular</div>} */}
      <RichTextCustom render={title} />
      <div className="description">
        <RichTextCustom render={features} />
      </div>
      <div className="price">
        <p>
          {price === 0 ? "Free" : `$${price}`}{" "}
          {price > 0 && <span>/month</span>}
        </p>
      </div>
    </PricingCardWrapper>
  )
}

export default PriceItem
