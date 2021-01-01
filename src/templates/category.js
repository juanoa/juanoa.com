import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { Card, Col, Row } from "react-bootstrap"

const CategoryTemplate = ({ data }) => (
  <Layout>
      <div className="content">
          <SEO title={data.strapiCategory.title} />
          <h1>{data.strapiCategory.title}</h1>
          <p>{data.strapiCategory.description}</p>

          <Row>
              {data.strapiCategory.posts.map(post => (
                <Col md={4}>
                    <Card className="grid-item">
                        <Link to={`/${post.slug}`}>
                            <Card.Img variant="top" src={post.coverPhoto.publicURL} />
                        </Link>
                        <Card.Body>
                            <Link to={`/${post.slug}`}>
                                <Card.Title>{post.title}</Card.Title>
                            </Link>
                            <Card.Text>
                                {post.content.slice(0, 100)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
              ))}
          </Row>
      </div>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate($slug: String!) {
        strapiCategory(slug: { eq: $slug }) {
            id
            title
            description
            posts {
                id
                title
                content
                slug
                coverPhoto {
                    publicURL
                }
            }
        }
    }
`