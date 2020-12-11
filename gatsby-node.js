/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    query {
      allPrismicBlogPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/blog_posts.js")

  pages.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
