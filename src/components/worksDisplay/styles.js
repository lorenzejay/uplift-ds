import styled from "styled-components"
import { device } from "../../styles/default"

export const WorkDisplayWrapper = styled.section`
  padding: 5%;
  background: ${({ theme }) => theme.background};
  @media ${device.mobileS} {
    padding: 10% 5%;
    h2 {
      text-transform: uppercase;
      color: ${({ theme }) => theme.text};
      text-align: center;
      font-size: 1.5rem;
    }
  }
  @media ${device.laptop} {
    h2 {
      font-size: 2rem;
    }
  }
`

export const WorkDisplayContent = styled.div`
  display: flex;
  margin: 10vh 0;
  flex-direction: column;
  align-items: center;
  img {
    width: 600px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }
`

export const WorkDisplayText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h3 {
    float: left;
    color: ${({ theme }) => theme.text};
  }
  p {
    color: ${({ theme }) => theme.text};
  }
  button {
    background: #ea5459;
    padding: 4px 30px;
    a {
      font-size: 0.8rem;
      color: white;
      text-decoration: none;
    }
  }
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 600px;
  }
`
