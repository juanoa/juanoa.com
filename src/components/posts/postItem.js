import React from "react"
import { Link } from "gatsby";

import { createDescription } from "../../helpers/createDescription"
import {createPostSlug} from "../../helpers/createSlugs";

const PostItem = ({post, showCategory, showDescription, col, lang}) => {

  const thumbnail = post.node.coverPhoto.formats?.small.url || post.node.coverPhoto.localFile.publicURL;
  const link = createPostSlug(post.node.slug, post.node.category.slug, lang)
  const title = post.node.title;
  const description = createDescription(post.node.content, 100);
  const category = post.node.category.title;

  return (
    <div className={`col-6 col-md-${col}`}>
      <div className="index__grid-item card">
        <Link to={link} className="index__post-link">
          {
            showCategory &&
            <span className="index__post-category-badge">{category}</span>
          }
          <img className="card-img-top" src={thumbnail} alt={title} />
        </Link>
        <div className="card-body index__card-body">
          <Link to={link} className="index__post-link">
            <div className="card-title index__post-title h5">
              {title}
            </div>
          </Link>
          {
            showDescription &&
            <p className="card-text index__post-description">
              {description}
            </p>
          }
        </div>
      </div>
    </div>
  );
}

export default PostItem;