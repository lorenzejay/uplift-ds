import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  html {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Poppins, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s ease-in;
  }
  `
