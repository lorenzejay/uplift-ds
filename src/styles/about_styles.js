import styled from "styled-components"
import { device } from "./default"

export const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  .about-hero {
    background: #ea6354;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      color: white;
      text-transform: uppercase;
    }
  }
  .about-img-content {
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      color: ${({ theme }) => theme.text};
      width: 100%;
      float: left;
    }
    p {
      color: ${({ theme }) => theme.text};
    }
  }
  @media ${device.mobileS} {
    .about-hero {
      height: 25vh;
    }
    .about-img-content {
      width: 90%;
      img {
        width: 200px;
      }
    }
  }
  @media ${device.laptop} {
    .about-hero {
      height: 40vh;
    }

    .about-img-content {
      margin: 0 auto;
      width: 65%;
      h3 {
        margin: 5vh 0;
      }
      p {
        font-size: 1.1rem;
        line-height: 2rem;
        margin-bottom: 3vh;
      }
    }
  }
`
