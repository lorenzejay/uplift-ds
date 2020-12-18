import styled from "styled-components"
import { device } from "./default"
export const HeroWrapper = styled.div`
  height: 90vh;
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
      padding: 8px 20px;
    }
    img {
      width: 75%;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    img {
      width: 50%;
    }
  }
`
