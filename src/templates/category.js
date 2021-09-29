import React from "react"
import { graphql, Link } from "gatsby";

import Layout from '../components/structure/layout'
import Seo from "../components/structure/seo"
import { PostGrid } from "../components/posts/postGrid";
import {getI18nForCategory} from "../helpers/i18n";

const CategoryTemplate = ({data, pageContext}) => {
  const {
    description,
    title,
    slug,
    index,
    currentUrl,
    previousUrl,
    nextUrl,
    locale
  } = pageContext;

  const posts = data.allStrapiPost.edges

  const otherLangCategory = data.otherLangCategory
  const i18n = getI18nForCategory(locale, slug, otherLangCategory)

  return (
    <Layout i18n={i18n}>
      <Seo title={title} description={description?.slice(0, 140)} index={index} i18n={i18n}/>

      <div className="page-content">

        <h1>{title}</h1>
        {
          description &&
          <div className="category__description mb-4">
            {description}
          </div>
        }

        <PostGrid posts={posts} showCategory={false} col={4} />

        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${currentUrl === previousUrl && "disabled"}`}><Link className="page-link" to={previousUrl}>Anterior</Link></li>
            <li className={`page-item ${currentUrl === nextUrl && "disabled"}`}><Link className="page-link" to={nextUrl}>Siguiente</Link></li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($slug: String!, $skip: Int!, $limit: Int!, $otherLangCategoryId: String) {
    allStrapiPost(
      filter: {category: {slug: {eq: $slug}}},
      sort: {fields: published_at, order: DESC},
      skip: $skip,
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          content
          published_at
          slug
          category {
            slug
          }
          coverPhoto {
            formats {
              small {
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
    otherLangCategory: strapiCategory(strapiId: {eq: $otherLangCategoryId}) {
      slug
      locale
    }
  }
`