import { Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"

const FeaturedIndexItem = ({post}) => {
  return (
    <Row className="mb-4">
      <Col md={6} className="pt-3">
        <Link to={`/${post.category.slug}/${post.slug}`}>
          <img src={post.coverPhoto.publicURL} alt={post.title} />
        </Link>
      </Col>
      <Col md={6} className="pt-3">
        <Link to={`/${post.category.slug}/${post.slug}`}>
          <h3 className="titulo-destacado">{post.title}</h3>
        </Link>
        <small style={{color: '#5564eb'}}><b>{post.category.title}</b></small>
        <p className="descripcion-destacada">{post.content.slice(0, 150)}...</p>
      </Col>
    </Row>
  );
}

export default FeaturedIndexItem;