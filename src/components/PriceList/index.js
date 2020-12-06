import { RichText } from "prismic-reactjs"
import React from "react"
import styled from "styled-components"
import PriceItem from "../PriceItem"

const PriceListWrapper = styled.section`
  max-width: 950px;
  margin: 10vh auto;

  .price-list-card-row:last-child {
    display: flex;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 5% 1% 0;
  }
`

const PriceList = ({ title, pricingList }) => {
  return (
    <PriceListWrapper>
      <RichText render={title} />
      <div className="price-list-card-row">
        {pricingList.map((item, i) => {
          console.log(item)
          return (
            <PriceItem
              key={i}
              title={item.price_list_title.raw}
              features={item.price_list_description.raw}
              price={item.price_of_service}
              mostPopular={item.price_type === "Most Popular"}
            />
          )
        })}
      </div>
    </PriceListWrapper>
  )
}

export default PriceList
