import styled from "styled-components"
import { device } from "../styles/default"

export const TestimonialWrapper = styled.section`
  padding: 5%;
  background: #c6f8f6;
  @media ${device.mobileS} {
    h2 {
      text-align: center;
      margin-top: 5vh;
    }
    .carousel {
      min-height: 60vh;
      width: 100%;
      .carousel-item {
        padding: 5%;
      }
    }
  }

  @media ${device.laptop} {
    h2 {
      text-align: start;
      margin: 0;
    }
    .carousel {
      min-height: 60vh;
    }
  }
`
export const TestimonialCard = styled.div`
  width: 70%;
  padding: 5% 0;
  margin: 0 auto;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #333;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.laptop} {
    padding: 5%;
  }
`
export const TestimonialProfile = styled.div`
  width: 17vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  h5 {
    margin-top: 3vh;
  }
  @media ${device.mobileS} {
    width: auto;
  }
`
export const ImageCropper = styled.div`
  width: 75px;
  height: 75px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  img {
    display: inline;
    margin: 0 auto;

    height: 100%;
    width: auto;
  }
  @media ${device.mobileS} {
    width: 100px;
    height: 100px;
  }
`
export const TestimonialImgAndQuote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10vw;
  width: 100%;

  align-items: center;
  p {
    margin: auto 0;
    display: block;
    margin-bottom: 5vh;
  }
  @media ${device.mobileS} {
    gap: 5vh;
    flex-direction: column;
    p {
      width: 100%;
      margin-bottom: 5vh;
    }
  }
  @media ${device.laptop} {
    flex-direction: column;
    p {
      width: 65%;
      font-size: 1.3rem;
    }
  }
`
export const TestimonialAuthorAndLink = styled.div`
  margin-top: 25px;
  h5 {
    margin: 0;
  }
  p {
    color: grey;
    font-size: 12px;
  }
  @media ${device.mobileS} {
    width: 100%;
  }
`
