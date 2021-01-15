import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const IndexItemGrid = ({post}) => {
  const thumbnail = post.node.coverPhoto.formats?.small.url || post.node.coverPhoto.localFile.publicURL;
  const link = `/${post.node.category.slug}/${post.node.slug}`;
  const title = post.node.title;
  const description = `${post.node.content.slice(0, 100)}...`;
  const category = post.node.category.title;

  return (
    <Col md={3} xs={6}>
      <Card className="grid-item">
        <Link to={link}>
          <span className="notify-badge">{category}</span>
          <Card.Img variant="top" src={thumbnail} />
        </Link>
        <Card.Body>
          <Link to={link}>
            <Card.Title>{title}</Card.Title>
          </Link>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IndexItemGrid;