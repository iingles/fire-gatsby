import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="All posts" />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="All posts" />
      <div className="container">
        <header className="section-header">
          <h1>Isaac's BlogAbout</h1>
          <h2>"Never in the history of the world has so much been said by so many to so few."</h2>
        </header>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (          
            <article 
            key={post.fields.slug}
            className="content-box"
            itemScope
            itemType="http://schema.org/Article"
            >
              <header className="article-header">
                <h2>
                  <Link to={`/blog${post.fields.slug}`} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
              </section>
            </article>
          )
        })}      
      </div>
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
