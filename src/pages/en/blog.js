import React from "react";
import {graphql} from "gatsby";

import Layout from "../../components/structure/layout";
import Seo from "../../components/structure/seo";
import MainPost from "../../components/posts/mainPost";
import FeaturedPostGrid from "../../components/posts/featuredPostGrid";
import {PostGrid} from "../../components/posts/postGrid";
import {getI18nForPage} from "../../helpers/i18n";

const BlogPageEn = ({data}) => {

  const posts = data.allStrapiPost.edges
  const firstPost = posts[0].node

  const i18n = getI18nForPage('en', '/en/blog/', 'es', '/blog/')

  return (
    <Layout i18n={i18n}>
      <Seo title="Blog | Juan Otálora" i18n={i18n}/>
      <div className="container-fluid homepage">
        <h1>Blog</h1>
        <MainPost post={firstPost} lang="en"/>
        <PostGrid posts={posts} init={1} end={5} lang="en"/>
      </div>
      <FeaturedPostGrid posts={posts} categoryName="Development" categorySlug="development" lang="en"/>
    </Layout>
  );
};

export default BlogPageEn;

export const pageQuery = graphql`
  query BlogPageEnQuery {
    allStrapiPost (
      filter: {homepage: {eq: true}, locale: {eq: "en"}},
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