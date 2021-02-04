import styled from "styled-components"
import { device } from "../styles/default"

export const TestimonialWrapper = styled.section`
  padding: 5%;
  background: ${({ theme }) => theme.background};
  @media ${device.mobileS} {
    h2 {
      color: ${({ theme }) => theme.text};
      text-align: center;
      margin-top: 5vh;
      font-size: 1.5rem;
      text-transform: uppercase;
    }
    .carousel {
      min-height: 60vh;
      width: 100%;
      .carousel-control-prev-icon,
      .carousel-control-next-icon {
        height: 100px;
        width: 100px;
        outline: black;
        background-size: 100%, 100%;

        background-image: none;
      }
      .carousel-control-next-icon:after {
        content: ">";
        font-size: 25px;
        color: ${({ theme }) => theme.text};
        font-weight: 700;
      }
      .carousel-control-prev-icon:after {
        content: "<";
        font-size: 25px;
        font-weight: 700;
        color: ${({ theme }) => theme.text};
      }
      .carousel-item {
        padding: 5%;
      }
    }
  }

  @media ${device.laptop} {
    padding: 5% 10vw;
    h2 {
      text-align: start;
      margin: 0;
      font-size: 2rem;
    }
    .carousel {
      height: 60vh;
      margin-bottom: 10vh;
    }
  }
`
export const TestimonialCard = styled.div`
  width: 70%;
  padding: 5% 0;
  margin: 0 auto;
  display: flex;

  justify-content: flex-start;
  align-items: center;
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
  h4 {
    margin-top: 3vh;
    color: ${({ theme }) => theme.text};
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
  h4 {
    color: ${({ theme }) => theme.text};
  }
  p {
    margin: auto 0;
    display: block;
    margin-bottom: 5vh;
    color: ${({ theme }) => theme.text};
  }
  @media ${device.mobileS} {
    gap: 5vh;
    flex-direction: column;
    p {
      width: 75%;
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
