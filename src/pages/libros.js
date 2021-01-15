import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookGrid from "../components/books/bookGrid"
import { Alert } from "react-bootstrap"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Libros" />
    <div className="homepage">
      <h1>Libros recomendados</h1>
      <Alert variant="dark">Hola</Alert>
      <BookGrid books={data.allStrapiBook.edges} />
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BookQuery {
    allStrapiBook (sort: {order: DESC, fields: readDate}) {
      edges {
        node {
          coverPhoto {
            localFile {
              publicURL
            }
          }
          description
          link
          title
        }
      }
    }
  }
`