import styled from "styled-components"
import { device } from "./default"

export const HeroWrapper = styled.div`
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #333;
  padding: 0 5%;
  background: #c6f3f8;
  gap: 5vw;
  img {
    width: 55%;
  }
  .hero-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
      width: 75%;
      text-align: center;
    }
  }
  button {
    background: #ea6354;
    a {
      color: white;
    }
  }
  @media ${device.mobileS} {
    height: 90vh;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 5vh;

    button {
      padding: 5px 15px;
      a {
        font-size: 14px;
      }
    }
    img {
      width: 75%;
    }
  }

  @media ${device.tablet} {
    height: 60vh;
    flex-direction: row;
    justify-content: flex-start;
    .hero-text {
      display: flex;
      align-items: flex-start;
      h1,
      p {
        text-align: start;
      }
    }
    img {
      width: 40%;
    }
  }
  @media ${device.laptop} {
    height: 90vh;
    justify-content: space-around;
    img {
      width: 40%;
    }
    button {
      padding: 8px 20px;
      a {
        font-size: 16px;
      }
    }
  }
  @media ${device.laptopL} {
    padding: 0%;
    height: 60vh;
    img {
      width: 30%;
    }
  }
  @media ${device.desktop} {
    padding: 0;
    height: 75vh;
    .hero-text {
      h1 {
        font-size: 3.5rem;
      }
      p {
        font-size: 2rem;
        line-height: 2.2rem;
      }
      button {
        padding: 15px 30px;
        a {
          font-size: 2rem;
        }
      }
    }
    img {
      width: 25%;
    }
  }
`
