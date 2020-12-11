import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import RichTextCustom from "../components/richText"
import linkResolver from "../utils/linkResolver"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

const ContactWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`

const Form = styled.form`
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

  input,
  textarea {
    margin: 15px 0;
    padding: 3px 10px;
    outline: none;
    width: inherit;
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
`

const Button = styled.button`
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
const ContactImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPrismicContactPage {
        edges {
          node {
            data {
              page_title {
                html
                text
                raw
              }
              page_image {
                alt
                copyright
                url
              }
              form_fields {
                field_name
                field_type
                required
              }
              description {
                html
                raw
                text
              }
            }
          }
        }
      }
    }
  `)
  const classes = useStyles()
  console.log(data.allPrismicContactPage.edges[0].node.data)
  return (
    <Layout>
      <ContactWrapper>
        <Form
          className={classes.root}
          onSubmit={e => e.preventDefault()}
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <RichTextCustom
            render={
              data.allPrismicContactPage.edges[0].node.data.page_title.raw
            }
          />

          <RichTextCustom
            render={
              data.allPrismicContactPage.edges[0].node.data.description.raw
            }
            linkResolver={linkResolver}
          />

          {data.allPrismicContactPage.edges[0].node.data.form_fields.map(
            (item, i) => {
              return (
                <div key={i}>
                  {item.field_type === "textarea" ? (
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Message"
                      multiline
                      rowsMax={4}
                      variant="outlined"
                    />
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label={item.field_name}
                      variant="outlined"
                      type={item.form_type}
                      name={item.field_name}
                      required={item.required === "Yes"}
                    />
                  )}
                </div>
              )
            }
          )}
          <Button type="submit">Submit</Button>
        </Form>
        <ContactImage
          src={data.allPrismicContactPage.edges[0].node.data.page_image.url}
        />
      </ContactWrapper>
    </Layout>
  )
}

export default ContactUs
