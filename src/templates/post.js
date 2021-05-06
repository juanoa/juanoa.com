import React from "react";
import ReactMarkdown from "react-markdown";
import { graphql, Link } from "gatsby";
import { RiTimerFill } from "react-icons/all";

import Layout from "../components/structure/layout";
import Seo from "../components/structure/seo";
import ProjectCard from "../components/projects/projectCard";
import BookCard from "../components/books/bookCard";

const PostTemplate = ({ data }) => {

  const {
    seoTitle,
    seoDescription,
    title,
    content,
    category,
    book,
    project,
    coverPhoto: { localFile: { publicURL: coverPhoto } }
  } = data.strapiPost;

  const wom = data.strapiPost.content.match(/\S+/g);
  const words = wom ? wom.length : 0;
  const timeToRead = Math.round(words / 250);

  return (
    <Layout>
      <Seo title={seoTitle || title} description={seoDescription || content.slice(0, 140)} />

      <div className="page-content">

        <Link to={`/${category.slug}`} className="post__category-link">
          <span className="post__category-title">
            {category.title}
          </span>
        </Link>

        <h1 className="mt-3">
          {title}
        </h1>

        <div className="post__time-to-read">
          <span>
            <RiTimerFill /> {timeToRead} min
          </span>
        </div>

        <img
          src={coverPhoto}
          className="post__cover-photo"
          alt={title}
        />
      </div>

      <div className="content">
        <BookCard book={book} />
        <ProjectCard project={project} />
        <ReactMarkdown source={content} escapeHtml={false} />
      </div>
    </Layout>
  );

};

export default PostTemplate;

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
        author
        link
        description
        coverPhoto {
          url
        }
      }
      project {
        title
        github
        external
        description
        tech
        logo {
          localFile {
            publicURL
          }
        }
      }
      seoDescription
      seoTitle
    }
  }
`;