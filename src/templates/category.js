import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { Row } from "react-bootstrap"
import CategoryItemGrid from "../components/categories/categoryItemGrid"

const CategoryTemplate = ({data, pageContext}) => {
  const {description, title, slug} = pageContext;
  return (
    <Layout>
      <SEO title={title} description={description?.slice(0, 140)} />
      <div className="page-content">
        <h1>{title}</h1>
        { description &&
          <div className="category__description mb-4">
            {description}
          </div>
        }
        <Row>
          {data.allStrapiPost.edges.map(post => (
            <CategoryItemGrid post={post.node} categorySlug={slug} key={post.node.id}/>
          ))}
        </Row>
        {/*<Pagination>*/}
        {/*  <Pagination.Prev disabled={paginaAnterior === pagina} href={`/${data.strapiCategory.slug}?p=${paginaAnterior}`} />*/}
        {/*  <Pagination.Next disabled={paginaSiguiente === pagina} href={`/${data.strapiCategory.slug}?p=${paginaSiguiente}`} />*/}
        {/*</Pagination>*/}
      </div>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query CategoryTemplate($slug: String!) {
    allStrapiPost(
      filter: {category: {slug: {eq: $slug}}},
      sort: {fields: published_at, order: DESC}
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