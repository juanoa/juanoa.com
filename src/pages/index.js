import React from "react"
import { graphql } from "gatsby"
import { Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexItemGrid from "../components/indexItemGrid"
import FeaturedIndexItem from "../components/featuredIndexItem"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Inicio" />
    <div className="homepage">
      {data.allStrapiPost.edges.slice(0, 1).map(document => (
        <FeaturedIndexItem post={document.node} />
      ))}
      <Row>
        {data.allStrapiPost.edges.slice(1).map(post => (
          <IndexItemGrid post={post} />
        ))}
      </Row>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          published_at(formatString: "d-M-yyyy")
          title
          category {
            slug
          }
          slug
          content
          coverPhoto {
            publicURL
          }
        }
      }
    }
  }
`