import styled from "styled-components"
import { device } from "../../styles/default"

export const WorkDisplayWrapper = styled.section`
  padding: 5%;
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
  width: 600px;

  h3 {
    float: left;
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
`
