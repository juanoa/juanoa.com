import React from "react"
import { Link } from "gatsby";

import { createDescription } from "../../helpers/createDescription"
import {createPostSlug} from "../../helpers/createSlugs";

const MainPost = ({post, lang}) => {

  const thumbnail = post.coverPhoto.formats?.medium.url || post.coverPhoto.localFile.publicURL
  const link = createPostSlug(post.slug, post.category.slug, lang)
  const title = post.title

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
      </div>
    </div>
  );
}

export default MainPost;