import React from "react";
import { Link } from "gatsby";

import { createDescription } from "../../helpers/createDescription";

const FeaturedPostItem = ({ post }) => {
  const thumbnail = post.node.coverPhoto.formats?.small.url || post.node.coverPhoto.localFile.publicURL;
  const link = `/${post.node.category.slug}/${post.node.slug}/`;
  const title = post.node.title;
  const description = createDescription(post.node.content, 150);

  return (
    <div className="col-md-4">
      <div className="card index__grid-item">
        <Link to={link} className="index__post-link">
          <img className="card-img-top" src={thumbnail} alt={title} />
        </Link>
        <div className="card-body index__card-body">
          <Link to={link} className="index__post-link">
            <div className="card-title index__card-title h5 text-white">
              {title}
            </div>
          </Link>
          <p className="card-text text-white-50 index__post-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostItem;