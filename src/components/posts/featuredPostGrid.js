import React  from "react"

import FeaturedPostItem from "./featuredPostItem"

const FeaturedPostGrid = ({posts, categoryName, categorySlug, lang}) => {

  let categoryPosts = [];
  let index = 0;
  posts.forEach(post => {
    if (post.node.category.slug === categorySlug && index < 3) {
      categoryPosts = [...categoryPosts, post]
      index++;
    }
  })

  return (
    <div className="container-fluid bg-dark text-white pt-4 pb-4 mt-3">
      <div className="index__category-grid">
        <h2>{categoryName}</h2>
        <div className="row mt-3">
          {categoryPosts.map(post => (
            <FeaturedPostItem post={post} key={post.node.id} lang="es"/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPostGrid;