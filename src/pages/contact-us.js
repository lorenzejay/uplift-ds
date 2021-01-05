import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
// import TextField from "@material-ui/core/TextField"
import RichTextCustom from "../components/richText"
import linkResolver from "../utils/linkResolver"
import {
  useStyles,
  ContactImage,
  ContactWrapper,
  Form,
  Button,
} from "../styles/contact_styles"
import SEO from "../components/seo"

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

  return (
    <Layout>
      <ContactWrapper>
        <SEO
          title="Uplift | Contact Us"
          description="Uplift Digital Solutions | Contact Us if you have any questions. We will respond to you within 48 Hours."
        />
        <Form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/contact-success"
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
                    <textarea
                      id="outlined-multiline-flexible"
                      placeholder="Message"
                      multiline
                      rowsMax={4}
                      name={item.field_name}
                      variant="outlined"
                    />
                  ) : (
                    <input
                      id="outlined-basic"
                      placeholder={item.field_name}
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
