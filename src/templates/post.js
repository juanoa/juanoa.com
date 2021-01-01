import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import ReactMarkdown from 'react-markdown'
import SEO from "../components/seo"

const PostTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiPost.title} description={data.strapiPost.content.slice(0, 140)} />
    <div className="content">
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
          marginTop: 15
        }}
      >
        {data.strapiPost.title}
      </h1>
      <img
        src={data.strapiPost.coverPhoto.publicURL}
        style={{
          width: "100%"
        }}
       alt={data.strapiPost.title}/>
    </div>

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
        publicURL
      }
    }
  }
`