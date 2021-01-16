module.exports = {
  siteMetadata: {
    title: `Isaac Jacob Ingles | Web Developer`,
    author: {
      name: `Isaac Ingles`,
      summary: `Web Developer based in West Jordan, Utah.`,
    },
    description: `Portfolio, Resume, and Blog.`,
    siteUrl: `https://isaacingles.com`,
    social: {
      twitter: `digitaljourneys`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAG7ICq8n6tDxPqD2YNm7Fm1GXthWwvTF4",
          authDomain: "fire-gatsby.firebaseapp.com",
          projectId: "fire-gatsby",
          storageBucket: "fire-gatsby.appspot.com",
          messagingSenderId: "237388217873",
          appId: "1:237388217873:web:31e27515470b2769a07bb0",
          measurementId: "G-3MB33P9QQ1"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,      
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-plugin-sass`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Isaac Jacob Ingles | Web Developer`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
