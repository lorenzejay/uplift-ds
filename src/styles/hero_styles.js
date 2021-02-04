import styled from "styled-components"
import { device } from "./default"
import BackgroundImage from "gatsby-background-image"
export const HeroWrapper = styled(BackgroundImage)`
  height: 60vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  /* display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: #333; */
  @media ${device.mobileS} {
    height: 90vh;
    /* flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 5vh; */
  }
  .hero-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    color: #333;

    img {
      width: 55%;
    }
    .hero-text {
      z-index: 10;
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.text};
        color: white;
      }
      p {
        font-size: 1.1rem;
        width: 85%;
        text-align: center;
        color: ${({ theme }) => theme.body};
        color: white;
      }
    }
    button {
      background: #ea6354;
      a {
        color: white;
      }
    }
    @media ${device.mobileS} {
      height: 100%;
      padding-top: 5%;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      gap: 5vh;

      button {
        padding: 5px 15px;
        a {
          font-size: 14px;
          text-decoration: none;
        }
      }
      img {
        z-index: 10;
        width: 75%;
      }
    }

    @media ${device.tablet} {
      height: 60vh;
      flex-direction: column-reverse;

      .hero-text {
        display: flex;
        align-items: flex-center;
      }
      img {
        width: 40%;
        margin-top: 5vh;
      }
    }
    @media ${device.laptop} {
      height: 90vh;
      padding: 10vh 10vw 0;
      flex-direction: row;
      justify-items: center;
      .hero-text {
        min-height: 25vh;
        align-items: flex-start;
        h1,
        p {
          text-align: start;
        }
        h1 {
          font-size: 2.3rem;
        }
        p {
          font-size: 1rem;
          line-height: 2rem;
        }
        img {
          width: 60%;
        }
      }
      justify-content: space-between;
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
      height: 90vh;

      img {
        width: 40%;
      }
      .hero-text {
        h1 {
          font-size: 3.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
    @media ${device.desktop} {
      height: 65vh;

      .hero-text {
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 2rem;
          line-height: 2.5rem;
        }
        button {
          margin-top: 3vh;
          padding: 10px 30px;
          a {
            font-size: 2rem;
          }
        }
      }
      img {
        width: 25%;
      }
    }
  }
  .blackOverlay {
    margin-right: 5%;
    position: absolute;
    padding: 0;
    width: 100%;
    height: 100%;

    background: black;
    /* opacity: ${({ theme }) => theme.homeBg}; */
    opacity: 75%;

    z-index: 2;
  }
`
