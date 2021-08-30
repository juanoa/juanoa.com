import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/structure/layout";
import Seo from "../components/structure/seo";
import MainPost from "../components/posts/mainPost";
import FeaturedPostGrid from "../components/posts/featuredPostGrid";
import { PostGrid } from "../components/posts/postGrid";
import {getI18nForPage} from "../helpers/i18n";

const BlogPage = ({ data }) => {

  const posts = data.allStrapiPost.edges
  const firstPost = posts[0].node

  const i18n = getI18nForPage('es', '/blog/', 'en', '/en/blog/')

  return (
    <Layout i18n={i18n}>
      <Seo title="Blog | Juan Otálora" i18n={i18n}/>
      <div className="container-fluid homepage">
        <h1>Blog</h1>
        <MainPost post={firstPost} lang="es"/>
        <PostGrid posts={posts} init={1} end={5} lang="es"/>
      </div>
      <FeaturedPostGrid posts={posts} categoryName={"Desarrollo"} categorySlug={"desarrollo"} lang="es"/>
      <div className="container-fluid homepage mt-5">
        <PostGrid posts={posts} init={5} end={13} lang="es" />
      </div>
      <FeaturedPostGrid posts={posts} categoryName={"Tecnología"} categorySlug={"tecnologia"} lang="es"/>
      <div className="container-fluid homepage mt-5">
        <PostGrid posts={posts} init={13} end={21} lang="es" />
      </div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPageQuery {
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