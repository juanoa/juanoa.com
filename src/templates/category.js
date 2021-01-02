import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { Row } from "react-bootstrap"
import CategoryItemGrid from "../components/categoryItemGrid"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiCategory.title} description={data.strapiCategory.description?.slice(0, 140)} />
      <div className="page-content">
          <SEO title={data.strapiCategory.title} />
          <h1>{data.strapiCategory.title}</h1>
          <p>{data.strapiCategory.description}</p>
          <Row>
              {data.strapiCategory.posts.map(post => (
                <CategoryItemGrid post={post} categorySlug={data.strapiCategory.slug}/>
              ))}
          </Row>
      </div>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate($slug: String!) {
        strapiCategory(slug: { eq: $slug }) {
            id
            title
            description
            slug
            posts {
                id
                title
                content
                slug
                coverPhoto {
                    publicURL
                }
            }
        }
    }
`