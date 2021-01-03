import styled from "styled-components"
import { device } from "../styles/default"

export const CtaWrapper = styled.section`
  width: 100%;
  padding: 5%;
  background-color: #ea6354;
  h2 {
    color: white;
  }

  @media ${device.mobileS} {
    padding: 10%;
    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 5vh;
    }
  }

  @media ${device.laptop} {
    padding: 5%;
    h2 {
      text-align: start;
      font-size: 1.62671rem;
    }
  }
`
export const CtaCard = styled.div`
  margin: 3vh 0;
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-around;
  gap: 3vw;
  .cta-card-text {
    h3,
    h4,
    p {
      color: white;
    }
    h3 {
      text-transform: uppercase;
      letter-spacing: 5px;

      width: 100%;
    }

    p {
      width: 85%;
      line-height: 1.8rem;
    }
  }
  @media ${device.mobileS} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 10vh 0;
    img {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
    h2 {
      font-size: 1.5rem;
    }
    .cta-card-text {
      float: left;
    }
  }

  @media ${device.mobileM} {
    .cta-card-text {
      p {
        font-size: 1.1rem;
      }
    }
  }
  @media ${device.laptop} {
    flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
    img {
      width: 35%;
    }
  }
  @media ${device.laptop} {
    flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
    .cta-card-text {
      h3,
      p {
        margin: 15px 0;
        float: ${props => (props.index % 2 !== 0 ? "right" : "")};
        width: 90%;
      }
    }
    img {
      width: 35%;
    }
  }
  @media ${device.desktop} {
    .cta-card-text {
      h3 {
        font-size: 3rem;
      }
      p {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
    img {
      width: 30%;
      height: auto;
    }
  }
`
