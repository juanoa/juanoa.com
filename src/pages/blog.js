import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/structure/layout";
import Seo from "../components/structure/seo";
import MainPost from "../components/posts/mainPost";
import FeaturedPostGrid from "../components/posts/featuredPostGrid";
import { PostGrid } from "../components/posts/postGrid";

const BlogPage = ({ data }) => {

  const posts = data.allStrapiPost.edges
  const firstPost = posts[0].node

  return (
    <Layout>
      <Seo title="Blog de Juan Otálora" />
      <div className="container-fluid homepage">
        <MainPost post={firstPost} />
        <PostGrid posts={posts} init={1} end={5} />
      </div>
      <FeaturedPostGrid posts={posts} categoryName={"Desarrollo"} categorySlug={"desarrollo"} />
      <div className="container-fluid homepage mt-5">
        <PostGrid posts={posts} init={5} end={13} />
      </div>
      <FeaturedPostGrid posts={posts} categoryName={"Tecnología"} categorySlug={"tecnologia"} />
      <div className="container-fluid homepage mt-5">
        <PostGrid posts={posts} init={13} end={21} />
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost (
      filter: {homepage: {eq: true}, locale: {eq: "es"}},
      sort: {order: DESC, fields: published_at}
     ) {
      edges {
        node {
          id
          homepage
          published_at(formatString: "d-M-yyyy")
          title
          category {
            title
            slug
          }
          slug
          content
          coverPhoto {
            formats {
              small {
                url
              }
              medium {
                url
              }
            }
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`;