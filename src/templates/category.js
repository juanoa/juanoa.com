import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiCategory.title}</h1>
    <p>{data.strapiCategory.description}</p>
    <ul>
      {data.strapiCategory.posts.map(post => (
        <li key={post.id}>
          <h3>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </h3>
          <Img fixed={post.coverPhoto.childImageSharp.fixed}/>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
    query CategoryTemplate($slug: String!) {
        strapiCategory(slug: { eq: $slug }) {
            id
            title
            description
            posts {
                id
                title
                content
                slug
                coverPhoto {
                    childImageSharp {
                        fixed(width: 250) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    }
`