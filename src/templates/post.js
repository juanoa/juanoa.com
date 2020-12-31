import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import ReactMarkdown from 'react-markdown'

const PostTemplate = ({ data }) => (
  <Layout>
    <Link to={`/category/${data.strapiPost.category.slug}`}
      style={{
        textDecoration: "none",
      }}
    >
      <span
        style={{
          borderBottom: "3px solid black",
          paddingBottom: 2,
          color: "black",
          textTransform: "uppercase",
          fontWeight: 700,
          fontSize: 16
        }}
      >
        {data.strapiPost.category.title}
      </span>
    </Link>
    <h1
      style={{
        fontSize: 52,
        marginTop: 15
      }}
    >
      {data.strapiPost.title}
    </h1>
    <Img
      fixed={data.strapiPost.coverPhoto.childImageSharp.fixed}
    />
    <div
      style={{
        marginTop: 25,
        maxWidth: 700,
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <ReactMarkdown source={ data.strapiPost.content } escapeHtml={false} />
    </div>
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
          fixed(width: 900) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`