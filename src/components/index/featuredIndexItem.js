import { Col, Row } from "react-bootstrap"
import React from "react"

import { createDescription } from "../../helpers/createDescription"

const FeaturedIndexItem = ({posts}) => {
  const post = posts.allStrapiPost.edges[0].node

  const thumbnail = post.coverPhoto.formats?.medium.url || post.coverPhoto.localFile.publicURL
  const link = `/${post.category.slug}/${post.slug}`
  const title = post.title
  const description = createDescription(post.content, 150)
  const category = post.category.title

  return (
    <Row className="mb-4">
      <Col md={6} className="pt-3">
        <a href={link} className="index__post-link">
          <img src={thumbnail} alt={title} />
        </a>
      </Col>
      <Col md={6} className="pt-3">
        <a href={link} className="index__post-link">
          <h3 className="index__featured-title">{title}</h3>
        </a>
        <small className="index__featured-category"><b>{category}</b></small>
        <p className="index__featured-description">{description}</p>
      </Col>
    </Row>
  );
}

export default FeaturedIndexItem;