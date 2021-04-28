import React from "react";

import PostItem from "./postItem";

export const PostGrid = ({ posts, init = 0, end = 0, showCategory = true, col = 3, showDescription = true }) => {

  let slicePosts = posts.allStrapiPost.edges;
  if (init > 0 || end > 0) {
    slicePosts = posts.allStrapiPost.edges.slice(init, end);
  }

  return (
    <div className="row">
      {slicePosts.map(post => (
        <PostItem
          post={post}
          showCategory={showCategory}
          showDescription={showDescription}
          col={col}
          key={post.node.id}
        />
      ))}
    </div>
  );
};