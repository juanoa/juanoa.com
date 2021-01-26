import { Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import React from "react"
import { createDescription } from "../../helpers/createDescription"

const IndexItemGrid = ({post}) => {
  const thumbnail = post.node.coverPhoto.formats?.small.url || post.node.coverPhoto.localFile.publicURL;
  const link = `/${post.node.category.slug}/${post.node.slug}`;
  const title = post.node.title;
  const description = createDescription(post.node.content, 100);
  const category = post.node.category.title;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="index__grid-item card">
        <a href={link}>
          <span className="notify-badge">{category}</span>
          <img className="card-img-top" src={thumbnail} alt={title} />
        </a>
        <div className="card-body index__card-body">
          <a href={link}>
            <div className="card-title index__card-title h5">
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

export default IndexItemGrid;