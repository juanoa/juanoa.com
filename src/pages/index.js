import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedIndexItem from "../components/index/featuredIndexItem"
import CategoryIndexGrid from "../components/index/categoryIndexGrid"
import { IndexItemGrid } from "../components/index/indexItemGrid";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Inicio" />
    <div className="container-fluid homepage">
      <FeaturedIndexItem posts={data} />
      <IndexItemGrid posts={data} init={1} end={5} />
    </div>
    <CategoryIndexGrid posts={data.allStrapiPost.edges} categoryName={'Tecnología'} categorySlug={'tecnologia'} />
    <div className="container-fluid homepage mt-5">
      <IndexItemGrid posts={data} init={5} end={13} />
    </div>
    <CategoryIndexGrid posts={data.allStrapiPost.edges} categoryName={'Productividad'} categorySlug={'productividad'} />
    <div className="container-fluid homepage mt-5">
      <IndexItemGrid posts={data} init={13} end={21} />
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