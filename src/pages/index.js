import React from "react"
import { graphql } from "gatsby"
import { Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexItemGrid from "../components/index/indexItemGrid"
import FeaturedIndexItem from "../components/index/featuredIndexItem"
import CategoryIndexGrid from "../components/index/categoryIndexGrid"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Inicio" />
    <div className="homepage">
      {data.allStrapiPost.edges.slice(0, 1).map(post => (
        <FeaturedIndexItem post={post.node} />
      ))}
      <Row>
        {data.allStrapiPost.edges.slice(1, 5).map(post => (
          <IndexItemGrid post={post} />
        ))}
      </Row>
    </div>
    <CategoryIndexGrid posts={data.allStrapiPost.edges} categoryName={'Tecnología'} categorySlug={'tecnologia'} />
    <div className="homepage mt-5">
      <Row>
        {data.allStrapiPost.edges.slice(5, 13).map(post => (
          <IndexItemGrid post={post} />
        ))}
      </Row>
    </div>
    <CategoryIndexGrid posts={data.allStrapiPost.edges} categoryName={'Productividad'} categorySlug={'productividad'} />
    <div className="homepage mt-5">
      <Row>
        {data.allStrapiPost.edges.slice(13, 21).map(post => (
          <IndexItemGrid post={post} />
        ))}
      </Row>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost (filter: {homepage: {eq: true}}, sort: {order: DESC, fields: published_at}) {
      edges {
        node {
          id
          homepage
          published_at(formatString: "d-M-yyyy")
          title
          category {
            title
            slug
          }
          slug
          content
          coverPhoto {
            formats {
              small {
                url
              }
              medium {
                url
              }
            }
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`