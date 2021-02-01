import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import ReactMarkdown from 'react-markdown'
import SEO from "../components/seo"
import BookPost from "../components/books/bookPost"
import { RiTimerFill } from "react-icons/all";

const PostTemplate = ({ data }) => {

  const wom = data.strapiPost.content.match(/\S+/g)
  const words = wom ? wom.length : 0;
  const timeToRead = Math.round(words/250);

  return (
    <Layout>
      <SEO title={data.strapiPost.seoTitle || data.strapiPost.title} description={data.strapiPost.seoDescription || data.strapiPost.content.slice(0, 140)} />
      <div className="page-content">
        <Link to={`/${data.strapiPost.category.slug}`}
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
        <div className="post__time-to-read">
          <span>
            <RiTimerFill /> {timeToRead} min
          </span>
        </div>
        <img
          src={data.strapiPost.coverPhoto.localFile.publicURL}
          className="post__cover-photo"
          alt={data.strapiPost.title}/>
      </div>

      <div
        style={{
          marginTop: 25,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto"
        }}
        className="content"
      >
        <BookPost book={data.strapiPost.book} />
        <ReactMarkdown source={ data.strapiPost.content } escapeHtml={false} />
      </div>
    </Layout>
  )

}

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
        localFile {
          publicURL
        }
      }
      book {
        title
        link
        description
        coverPhoto {
          localFile {
            publicURL
          }
        }
      }
      seoDescription
      seoTitle
    }
  }
`