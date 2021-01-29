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
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="category__grid-item card">
        <a href={link} className="category__post-link">
          <img className="card-img-top" src={thumbnail} alt={title} />
        </a>
        <div className="card-body category__card-body">
          <a href={link} className="category__post-link">
            <div className="card-title category__post-title h5">
              {title}
            </div>
          </a>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryItemGrid;