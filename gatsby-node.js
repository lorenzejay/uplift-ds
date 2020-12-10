/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const pages = await graphql(`
//     {
//       allPrismicPage {
//         edges {
//           node {
//             uid
//             data {
//               page_title {
//                 html
//                 text
//                 raw
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const template = path.resolve("src/templates/pages.js")

//   pages.data.allPrismicPage.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node.uid}`,
//       component: template,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   })
// }
