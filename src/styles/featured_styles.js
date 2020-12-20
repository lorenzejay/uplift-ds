import styled from "styled-components"
import { device } from "./default"

export const FeaturedSectionWrapper = styled.section`
  width: 100%;

  margin: 0 auto;
  @media ${device.mobileS} {
    padding: 10% 5%;
    h2 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  @media ${device.laptop} {
    padding: 5%;
    h2 {
      font-size: 1.8rem;
      text-align: start;
    }
  }
  @media ${device.desktop} {
    h2 {
      font-size: 3rem;
    }
  }
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
  margin: 20px 0;
  border-radius: 24px;
  background: #e0e5ec;
  box-shadow: -29px -29px 57px #bec3c9, 29px 29px 57px #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-right: #ea6354 4px solid; */
  transition: transform 0.5s ease-in;
  &:hover {
    transform: scale(1.1);
  }

  .featured-title {
    width: 100%;
    text-align: center;
  }

  @media ${device.mobileS} {
    width: 80vw;
    min-height: 40vh;
    margin: 5vh auto;
    text-align: center;
    .featured-image-wrapper {
      height: 15vh;
      margin-bottom: 15px;
      img {
        height: 100%;
      }
    }
  }
  @media ${device.mobileM} {
    width: 72vw;
    min-height: 45vh;
    margin: 5vh auto;
    text-align: center;
    p {
      font-size: 1.1rem;
    }
  }
  @media ${device.mobileL} {
    p {
      font-size: 1.1rem;
    }
  }

  @media ${device.tablet} {
    width: 85vw;
    height: 38vh;
  }
  @media ${device.laptop} {
    width: 25vw;
    height: 60vh;
    justify-content: space-evenly;

    .featured-image-wrapper {
      height: 20vh;
      width: 100%;
    }
    .featured-title {
      height: 10vh;
      margin-top: auto;
      h3 {
        font-size: 1.3rem;
      }
    }
    .featured-content {
      height: 20vh;
      p {
        font-size: 1rem;
      }
    }
  }
  @media ${device.desktop} {
    width: 26vw;
    border-left: 5px solid #ea6354;
    height: 55vh;
    margin: 20px 0;
    .featured-image-wrapper {
      height: 20vh;
      width: 100%;
      img {
        height: 100%;
      }
    }
    .featured-title {
      h3 {
        font-size: 2rem;
      }
    }
    .featured-content {
      p {
        font-size: 1.7rem;
        line-height: 2rem;
      }
    }
  }
`
