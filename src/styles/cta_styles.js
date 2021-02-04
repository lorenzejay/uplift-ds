import styled from "styled-components"
import { device } from "../styles/default"

export const CtaWrapper = styled.section`
  width: 100%;
  padding: 10% 5%;

  background: ${({ theme }) => theme.background};
  h2,
  h3,
  p {
    color: ${({ theme }) => theme.text};
  }

  @media ${device.mobileS} {
    padding: 10%;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20vh;
    }
    button {
      background-color: #ea6354;
      color: white;
      text-transform: uppercase;
    }
    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 5vh;
    }
  }

  @media ${device.laptop} {
    padding: 5% 10vw;
    h2 {
      text-align: start;
      font-size: 2rem;
    }
    a button {
      margin: 0 auto;
    }
  }
  .card-wrapper {
    @media ${device.mobileS} {
      display: flex;
      flex-direction: column;
    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;
  }
`
export const CtaCard = styled.div`
  margin: 3vh 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-around;
  gap: 3vw;
  .cta-card-text {
    h3,
    h4,
    p {
      color: ${({ theme }) => theme.text};
      text-align: center;
    }
    h3 {
      text-transform: uppercase;
      letter-spacing: 5px;

      width: 100%;
    }

    p {
      line-height: 1.8rem;
    }
  }
  @media ${device.mobileS} {
    width: 100%;

    align-items: center;
    justify-content: flex-start;
    margin: 10vh 0;

    img {
      width: 40%;
      border-radius: 10px;
      object-fit: cover;
    }
    h3 {
      text-align: center;
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
    .cta-card-text {
      h3,
      p {
        text-align: start;
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
