import React from "react"
import { Link } from "gatsby";

import { createDescription } from "../../helpers/createDescription"

const CategoryItemGrid = ({post, categorySlug}) => {
  const thumbnail = post.coverPhoto.formats?.small.url || post.coverPhoto.localFile.publicURL;
  const link = `/${categorySlug}/${post.slug}`;
  const title = post.title;
  const description = createDescription(post.content, 100)

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="category__grid-item card">
        <Link to={link} className="category__post-link">
          <img className="card-img-top" src={thumbnail} alt={title} />
        </Link>
        <div className="card-body category__card-body">
          <Link to={link} className="category__post-link">
            <div className="card-title category__post-title h5">
              {title}
            </div>
          </Link>
          <p className="card-text category__post-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryItemGrid;