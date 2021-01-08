import styled from "styled-components"
import { device } from "../styles/default"
import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

export const ContactWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  /* margin: 0 auto; */

  background-color: ${({ theme }) => theme.background};
  @media ${device.mobileS} {
    flex-direction: column;
    padding: 10vh 0;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const Form = styled.form`
  padding: 2% 3%;
  margin: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  width: 45%;
  div {
    width: 100%;
  }

  h1,
  p,
  input,
  textarea {
    color: ${({ theme }) => theme.text};
  }
  input,
  textarea {
    border: 0.5px solid #333;
    border-radius: 7px;
    margin: 15px 0;
    padding: 5px 15px;
    outline: none;
    width: inherit;
    color: #333;
    &::placeholder {
      color: ${props => (props.darkMode ? "#333" : "#333")};
    }
  }
  textarea {
    height: 15vh;
  }
  input {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    width: 100%;
  }
  h1 {
    width: 100%;
    text-align: center;
  }

  @media ${device.mobileS} {
    padding: 0 5%;
    width: 100%;
    align-items: center;
    input,
    textarea {
      width: 100%;
    }
  }

  @media ${device.laptop} {
    width: 45%;
  }
`

export const Button = styled.button`
  background: #333;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;
  color: white;
  padding: 10px;
  text-transform: uppercase;
`
export const ContactImage = styled.img`
  width: 375px;
  height: 375px;
  object-fit: cover;
`
