import React from "react"
import { graphql, Link } from "gatsby";

import Layout from '../components/layout'
import SEO from "../components/seo"
import CategoryItemGrid from "../components/categories/categoryItemGrid"

const CategoryTemplate = ({data, pageContext}) => {
  const {description, title, slug, index, currentUrl, previousUrl, nextUrl} = pageContext;
  const metaTitle = `Artículos sobre ${title}`
  return (
    <Layout>
      <SEO title={metaTitle} description={description?.slice(0, 140)} index={index} />
      <div className="page-content">
        <h1>{title}</h1>
        { description &&
          <div className="category__description mb-4">
            {description}
          </div>
        }
        <div className="row">
          {data.allStrapiPost.edges.map(post => (
            <CategoryItemGrid post={post.node} categorySlug={slug} key={post.node.id}/>
          ))}
        </div>
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
  query CategoryTemplate($slug: String!, $skip: Int!, $limit: Int!) {
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
  }
`