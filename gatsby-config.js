require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Uplift Digital Solutions`,
    description: `Los Angeles based Web Design and Development Solutions.`,
    author: `Lorenze Jay`,
    url: "https://upliftdigitalsolutions.com/",
    image: "/images/upliftsquare.png",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `upliftds`,

        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
          if (doc.type === "category") {
            return `/category/${doc.uid}`
          }

          // URL for a product type
          if (doc.type === "product") {
            return `/product/${doc.uid}`
          }

          // URL for a page type
          if (doc.type === "page") {
            return `/${doc.uid}`
          }

          // Backup for all other types
          return "/"
        },
        schemas: {
          contact_page: require("./src/schemas/contact_page.json"),
          about: require("./src/schemas/about.json"),
          navigation: require("./src/schemas/navigation_links.json"),
          homepage: require("./src/schemas/homepage.json"),
          blog_homepage: require("./src/schemas/blog_homepage.json"),
          blog_post: require("./src/schemas/blog_post.json"),
        },
        imageImgixParams: {
          auto: "compress,format",
          fit: "max",
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#333333`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Uplift Digital Solutions`,
        short_name: `Specializing Web Design and Development, SEO and Content Management`,
        start_url: `/`,
        background_color: `#ea6354`,
        theme_color: `#ea6354`,
        display: `minimal-ui`,
        icon: `src/images/upliftsquare.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
