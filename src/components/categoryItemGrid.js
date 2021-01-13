import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const CategoryItemGrid = ({post, categorySlug}) => {
  return (
    <Col md={4} xs={6}>
      <Card className="grid-item">
        <Link to={`/${categorySlug}/${post.slug}`}>
          <Card.Img variant="top" src={post.coverPhoto.publicURL} />
        </Link>
        <Card.Body>
          <Link to={`/${categorySlug}/${post.slug}`}>
            <Card.Title>{post.title}</Card.Title>
          </Link>
          <Card.Text>
            {post.content.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CategoryItemGrid;