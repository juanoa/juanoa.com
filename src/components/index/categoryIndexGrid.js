import { Row } from "react-bootstrap"
import React  from "react"
import CategoryIndexItem from "./categoryIndexItem"

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
            <CategoryIndexItem post={post} />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default CategoryIndexGrid;