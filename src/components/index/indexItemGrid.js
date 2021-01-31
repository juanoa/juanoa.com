import React from "react";

import IndexPostItem from "./indexPostItem";

export const IndexItemGrid = ({posts, init, end}) => {
  return (
    <div className="row">
      {posts.allStrapiPost.edges.slice(init, end).map(post => (
        <IndexPostItem post={post} key={post.node.id} />
      ))}
    </div>
  )
}