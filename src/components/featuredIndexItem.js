import { Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const FeaturedIndexItem = ({post}) => {
  const thumbnail = post.coverPhoto.formats?.medium.url || post.coverPhoto.localFile.publicURL;
  const link = `/${post.category.slug}/${post.slug}`;
  const title = post.title;
  const description = `${post.content.slice(0, 150)}...`;
  const category = post.category.title;

  return (
    <Row className="mb-4">
      <Col md={6} className="pt-3">
        <Link to={link}>
          <img src={thumbnail} alt={title} />
        </Link>
      </Col>
      <Col md={6} className="pt-3">
        <Link to={link}>
          <h3 className="titulo-destacado">{title}</h3>
        </Link>
        <small style={{color: '#5564eb'}}><b>{category}</b></small>
        <p className="descripcion-destacada">{description}</p>
      </Col>
    </Row>
  );
}

export default FeaturedIndexItem;