import React from "react"
import { Link } from "gatsby";

import { createDescription } from "../../helpers/createDescription"
import {createPostSlug} from "../../helpers/createSlugs";

const MainPost = ({post, lang}) => {

  const thumbnail = post.coverPhoto.formats?.medium.url || post.coverPhoto.localFile.publicURL
  const link = createPostSlug(post.slug, post.category.slug, lang)
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

export default MainPost;