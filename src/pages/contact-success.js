import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "../components/button"

export const ContactWrapper = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.text};
  }

  button {
    background-color: #ea6354;
  }
`
const ContactSucess = () => {
  return (
    <Layout>
      <SEO
        title="Uplift | Contact"
        description="Uplift Digital Solutions | Specializing in Web Design, Development, SEO, and Content Management."
      />
      <ContactWrapper>
        <h1>Your Message Has been Delivered</h1>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </ContactWrapper>
    </Layout>
  )
}

export default ContactSucess
