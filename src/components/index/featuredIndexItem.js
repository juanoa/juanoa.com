import React from "react"
import { Link } from "gatsby";

import { createDescription } from "../../helpers/createDescription"

const FeaturedIndexItem = ({posts}) => {
  const post = posts.allStrapiPost.edges[0].node

  const thumbnail = post.coverPhoto.formats?.medium.url || post.coverPhoto.localFile.publicURL
  const link = `/${post.category.slug}/${post.slug}`
  const title = post.title
  const description = createDescription(post.content, 150)
  const category = post.category.title

  return (
    <div className="row mb-4">
      <div className="col-md-6 pt-3">
        <Link to={link} className="index__post-link">
          <img src={thumbnail} alt={title} />
        </Link>
      </div>
      <div className="col-md-6 pt-3">
        <Link to={link} className="index__post-link">
          <h3 className="index__featured-title">{title}</h3>
        </Link>
        <small className="index__featured-category"><b>{category}</b></small>
        <p className="index__featured-description">{description}</p>
      </div>
    </div>
  );
}

export default FeaturedIndexItem;