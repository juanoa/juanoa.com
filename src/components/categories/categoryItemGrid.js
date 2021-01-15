import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"
import { createDescription } from "../../helpers/createDescription"

const CategoryItemGrid = ({post, categorySlug}) => {
  const thumbnail = post.coverPhoto.formats?.small.url || post.coverPhoto.localFile.publicURL;
  const link = `/${categorySlug}/${post.slug}`;
  const title = post.title;
  const description = createDescription(post.content, 100)

  return (
    <Col md={4} xs={6}>
      <Card className="grid-item">
        <Link to={link}>
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

export default CategoryItemGrid;