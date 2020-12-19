import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Link } from "gatsby"

const _404Page = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 4rem;
  }
  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Uplift | 404" />
    <_404Page>
      <h1>404</h1>
      <p>This page does not exist :(</p>
      <p>
        But let's bring you a page that does -<Link to="/"> Home</Link>
      </p>
    </_404Page>
  </Layout>
)

export default NotFoundPage
