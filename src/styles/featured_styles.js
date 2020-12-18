import styled from "styled-components"
import { device } from "./default"

export const FeaturedSectionWrapper = styled.section`
  width: 100%;
  padding: 5%;
  margin: 0 auto;
`
export const FeaturedGrid3 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.mobileS} {
    flex-direction: column;
    align: center;
    justify-content: space-around;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const FeaturedBlockWrapper = styled.section`
  padding: 20px;
  background: #fff;
  margin: 20px 0;
  border-radius: 10px;
  height: 55vh;
  width: 23vw;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: #ea6354 4px solid;

  .featured-content {
    display: flex;
    align-items: center;
  }
  .featured-image-wrapper {
    border-radius: 10px;
    margin: auto 10px;
  }
  .featured-title {
    width: 100%;
    text-align: center;
  }

  @media ${device.mobileS} {
    width: 85vw;
    min-height: 45vh;
    margin: 5vh auto;
    text-align: center;
  }
  @media ${device.mobileM} {
    width: 85vw;
    min-height: 45vh;
    margin: 5vh auto;
    text-align: center;
    p {
      font-size: 1.1rem;
    }
  }
  @media ${device.mobileL} {
    width: 85vw;
    min-height: 35vh;
    margin: 5vh auto;
    text-align: center;
    p {
      font-size: 1.1rem;
    }
  }

  @media ${device.tablet} {
    width: 85vw;
    height: 38vh;
  }
  @media ${device.laptop} {
    width: 26vw;
    height: 55vh;
    margin: 20px 0;
  }
`
