import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Row, Col } from "react-bootstrap"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Inicio" />
    <div className="homepage">
      {data.allStrapiPost.edges.slice(0, 1).map(document => (
        <Row className="mb-4">
          <Col md={6} className="pt-3">
            <img src={document.node.coverPhoto.publicURL} alt={document.node.title} />
          </Col>
          <Col md={6} className="pt-3">
            <h3 className="titulo-destacado">{document.node.title}</h3>
            <small>Publicado el {document.node.published_at}</small>
            <p className="descripcion-destacada">{document.node.content.slice(0, 150)}...</p>
          </Col>
        </Row>
      ))}
      <Row>
        {data.allStrapiPost.edges.slice(1).map(document => (
          <Col md={3}>
            <Card className="grid-item">
              <Link to={`/${document.node.slug}`}>
                <Card.Img variant="top" src={document.node.coverPhoto.publicURL} />
              </Link>
              <Card.Body>
                <Link to={`/${document.node.slug}`}>
                  <Card.Title>{document.node.title}</Card.Title>
                </Link>
                <Card.Text>
                  {document.node.content.slice(0, 100)}...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
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