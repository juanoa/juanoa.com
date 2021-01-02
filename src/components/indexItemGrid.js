import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const IndexItemGrid = ({post}) => {
  return (
    <Col md={3}>
      <Card className="grid-item">
        <Link to={`/${post.node.category.slug}/${post.node.slug}`}>
          <span className="notify-badge">{post.node.category.title}</span>
          <Card.Img variant="top" src={post.node.coverPhoto.publicURL} />
        </Link>
        <Card.Body>
          <Link to={`/${post.node.category.slug}/${post.node.slug}`}>
            <Card.Title>{post.node.title}</Card.Title>
          </Link>
          <Card.Text>
            {post.node.content.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IndexItemGrid;