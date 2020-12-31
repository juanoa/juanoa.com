import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.title}</h1>
    <p>
      <Link to={`/category/${data.strapiPost.category.slug}`}>{data.strapiPost.category.title}</Link>
    </p>
    <Img fixed={data.strapiPost.coverPhoto.childImageSharp.fixed}/>
    <p>{data.strapiPost.content}</p>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($slug: String!) {
    strapiPost(slug: {eq: $slug}) {
      title
      content
      category {
          id
          slug
          title
      }
      coverPhoto {
        childImageSharp {
          fixed(width: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`