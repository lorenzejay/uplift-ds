import styled from "styled-components"
import { device } from "../styles/default"

export const TestimonialWrapper = styled.section`
  padding: 5%;
`
export const TestimonialCard = styled.div`
  width: 70%;
  padding: 5% 0;
  margin: 0 auto;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #333;
`
export const TestimonialProfile = styled.div`
  width: 17vw;

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
  gap: 10vw;
  width: 100%;
  flex-direction: row;
  align-items: center;
  p {
    width: 75%;
    margin: auto 0;
  }
  @media ${device.mobileS} {
    flex-direction: column;
    p {
      width: 100%;
    }
  }
  @media ${device.laptop} {
    flex-direction: row;
    p {
      width: 100%;
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
