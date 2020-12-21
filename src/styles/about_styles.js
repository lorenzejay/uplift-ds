import styled from "styled-components"
import { device } from "./default"

export const AboutWrapper = styled.div`
  .about-hero {
    height: 40vh;
    background: #ea6354;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
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
      width: 100%;
      float: left;
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
    .about-img-content {
      margin: 0 auto;
      width: 65%;
    }
  }
`
