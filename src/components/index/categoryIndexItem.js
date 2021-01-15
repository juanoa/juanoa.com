import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import React  from "react"
import { createDescription } from "../../helpers/createDescription"

const CategoryIndexItem = ({post}) => {
  const thumbnail = post.node.coverPhoto.formats?.small.url || post.node.coverPhoto.localFile.publicURL;
  const link = `/${post.node.category.slug}/${post.node.slug}`;
  const title = post.node.title;
  const description = createDescription(post.node.content, 150);

  return (
    <Col md={4}>
      <Card className="grid-item bg-dark">
        <Link to={link}>
          <Card.Img variant="top" src={thumbnail} />
        </Link>
        <Card.Body>
          <Link to={link}>
            <Card.Title className={"text-white"}>{title}</Card.Title>
          </Link>
          <Card.Text className="text-white-50">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CategoryIndexItem;