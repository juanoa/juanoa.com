import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ul>
        {data.allStrapiPost.edges.map(document => (
          <li key={document.node.id}>
              <h3>
                  <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
              </h3>
              <Img fixed={document.node.coverPhoto.childImageSharp.fixed}/>
              <p>{document.node.content}</p>
          </li>
        ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          slug
          content
          coverPhoto {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`