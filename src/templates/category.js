import React, { useEffect, useState } from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"
import { Pagination, Row } from "react-bootstrap"
import CategoryItemGrid from "../components/categories/categoryItemGrid"

const CategoryTemplate = ({ data }) => {
  const postsPorPagina = 100;
  const postsLength = data.strapiCategory.posts.length;

  const [pagina, setPagina] = useState(1)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    setPagina(parseInt(query.get('p')) || 1)
  }, [])

  const postInicio = postsPorPagina*(pagina-1);
  const postFinal = postInicio+postsPorPagina;

  const paginaSiguiente = postFinal<postsLength ? pagina+1 : pagina;
  const paginaAnterior = pagina>1 ? pagina-1 : 1;

  return (
    <Layout>
      <SEO title={data.strapiCategory.title} description={data.strapiCategory.description?.slice(0, 140)} />
      <div className="page-content">
        <h1>{data.strapiCategory.title}</h1>
        { data.strapiCategory.description &&
          <div className="category__description mb-4">
            {data.strapiCategory.description}
          </div>
        }
        <Row>
          {data.strapiCategory.posts.reverse().slice(postInicio, postFinal).map(post => (
            <CategoryItemGrid post={post} categorySlug={data.strapiCategory.slug}/>
          ))}
        </Row>
        <Pagination>
          <Pagination.Prev disabled={paginaAnterior === pagina} href={`/${data.strapiCategory.slug}?p=${paginaAnterior}`} />
          <Pagination.Next disabled={paginaSiguiente === pagina} href={`/${data.strapiCategory.slug}?p=${paginaSiguiente}`} />
        </Pagination>
      </div>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate($slug: String!) {
        strapiCategory(
          slug: { 
            eq: $slug 
          }
        ) {
            id
            title
            description
            slug
            posts {
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
`