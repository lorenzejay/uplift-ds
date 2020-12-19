import styled from "styled-components"
import { device } from "../styles/default"

export const CtaWrapper = styled.section`
  width: 100%;
  padding: 5%;
  background: #ea6354;
  h2 {
    color: white;
  }
`
export const CtaCard = styled.div`
  margin: 3vh 0;
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-around;
  gap: 5vw;
  .cta-card-text {
    h3,
    h4,
    p {
      color: white;
    }
    h4::before {
      content: "🚀  ";
    }
    p {
      width: 85%;
    }
  }
  @media ${device.mobileS} {
    width: 100%;
    flex-direction: column;
    padding: 5% 3%;
    img {
      width: 45%;
    }
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media ${device.laptop} {
    flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  }
`
