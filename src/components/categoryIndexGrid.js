import { Card, Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import React  from "react"

const CategoryIndexGrid = ({posts, categoryName, categorySlug}) => {

  let categoryPosts = [];
  let index = 0;
  posts.forEach(post => {
    if (post.node.category.slug === categorySlug && index < 3) {
      categoryPosts = [...categoryPosts, post]
      index++;
    }
  })

  return (
    <div className="bg-dark text-white pt-4 pb-4 mt-3">
      <div className="category-grid">
        <h2>{categoryName}</h2>
        <Row className="mt-3">
          {categoryPosts.map(post => (
            <Col md={4}>
              <Card className="grid-item bg-dark">
                <Link to={`/${post.node.category.slug}/${post.node.slug}`}>
                  <Card.Img variant="top" src={post.node.coverPhoto.childImageSharp.fixed.src} />
                </Link>
                <Card.Body>
                  <Link to={`/${post.node.category.slug}/${post.node.slug}`}>
                    <Card.Title className={"text-white"}>{post.node.title}</Card.Title>
                  </Link>
                  <Card.Text className="text-white-50">
                    {post.node.content.slice(0, 100)}...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CategoryIndexGrid;