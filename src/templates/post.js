import React from "react";
import { graphql, Link } from "gatsby";
import { RiTimerFill } from "react-icons/all";

import Layout from "../components/structure/layout";
import Seo from "../components/structure/seo";
import ProjectCard from "../components/projects/projectCard";
import BookCard from "../components/books/bookCard";
import {Markdown} from "../components/structure/markdown";
import {getI18nForPost} from "../helpers/i18n";
import {timeToRead} from "../helpers/timeToRead";
import {createCategorySlug} from "../helpers/createSlugs";

const PostTemplate = ({ data }) => {

  const {
    seoTitle,
    seoDescription,
    title,
    slug,
    content,
    category,
    book,
    project,
    coverPhoto: { localFile: { publicURL: coverPhoto } },
    locale
  } = data.strapiPost;

  const TTR = timeToRead(data.strapiPost.content)

  const i18n = getI18nForPost(locale, category.slug, slug, data.otherLangPost)

  return (
    <Layout i18n={i18n}>
      <Seo title={seoTitle || title} description={seoDescription || content.slice(0, 140)} i18n={i18n} />

      <div className="page-content">

        <Link to={createCategorySlug(category.slug, locale)} className="post__category-link">
          <span className="post__category-title">
            {category.title}
          </span>
        </Link>

        <h1 className="mt-3">
          {title}
        </h1>

        <div className="post__time-to-read">
          <span>
            <RiTimerFill /> {TTR} min
          </span>
        </div>

        <img
          src={coverPhoto}
          className="post__cover-photo"
          alt={title}
        />
      </div>

      <div className="content">
        <BookCard book={book} lang={locale} />
        <ProjectCard project={project} lang={locale} />
        <Markdown content={content} />
      </div>
    </Layout>
  );

};

export default PostTemplate;

export const query = graphql`
  query PostTemplate($slug: String!, $otherLangPostId: String) {
    strapiPost(slug: {eq: $slug}) {
      title
      content
      slug
      seoDescription
      seoTitle
      locale
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
        slug
        description
        tech
        logo {
          localFile {
            publicURL
          }
        }
      }
    }
    otherLangPost: strapiPost(strapiId: {eq: $otherLangPostId}) {
      slug
      locale
      category{
        slug
      }
    }
  }
`;