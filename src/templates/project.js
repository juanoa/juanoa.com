import React from "react";

import Layout from "../components/structure/layout";
import Seo from "../components/structure/seo";
import {AiFillCloud, FaAndroid, FaApple, FaGithub, FaStar} from "react-icons/all";
import { graphql } from "gatsby";
import { PostGrid } from "../components/posts/postGrid";
import {Markdown} from "../components/structure/markdown";
import {getI18nForProject} from "../helpers/i18n";

const ProjectTemplate = ({ data, pageContext }) => {

  const {
    title,
    slug,
    cover,
    logo,
    content,
    external,
    github,
    android,
    ios,
    isFeature,
    tech,
    description,
    locale,
  } = pageContext;

  const posts = data.allStrapiPost.edges;

  const i18n = getI18nForProject(locale, slug, data.otherLangProject)

  return (
    <Layout i18n={i18n}>
      <Seo title={`${title} | ${(locale === "es") ? 'Proyecto de Juan Otálora' : 'Juan Otálora project'}`} description={description.slice(0, 140)} i18n={i18n} />

      <div className="container-fluid homepage mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              {
                isFeature &&
                <span className="project__feature-star"><FaStar /></span>
              }
              {
                cover &&
                <img
                  src={cover}
                  alt={title}
                  className="card-img-top"
                />
              }
              <div className="card-body bg-light text-center ">
                {
                  logo &&
                  <div className="bg-white rounded-circle shadow p-4 project__logo-div">
                    <img
                      src={logo}
                      alt={title}
                      width={65} />
                  </div>
                }
                <h1 className="card-title h3 font-weight-bold">
                  {title}
                </h1>
                <div>
                  {
                    tech.split(", ").map((tech, i) => (
                      <span key={i} className="badge badge-pill badge-primary mr-2 text-monospace">
                      {tech}
                    </span>
                    ))
                  }
                </div>
                <div className="mt-4 mb-4">
                  <small>{description}</small>
                </div>

                <div>
                  {
                    external &&
                    <a
                      href={external}
                      className="card-link project__external-link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiFillCloud />
                    </a>
                  }
                  {
                    github &&
                    <a
                      href={github}
                      className="card-link project__external-link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  }
                  {
                    android &&
                    <a
                      href={android}
                      className="card-link project__external-link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaAndroid />
                    </a>
                  }
                  {
                    ios &&
                    <a
                      href={ios}
                      className="card-link project__external-link"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaApple />
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            {
              posts.length > 0 &&
              <div>
                <h3 className="mb-2">
                  {
                    (locale === "es")
                      ? 'Artículos relacionados'
                      : 'Related posts'
                  }
                </h3>
                <PostGrid col={4} posts={posts} showCategory={true} showDescription={false} lang={i18n.actual} />
              </div>
            }
            {
              posts.length > 0 && content &&
              <hr />
            }
            {
              content &&
              <Markdown content={content} />
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplate($id: String!, $otherLangProjectId: String!) {
    allStrapiPost(
      filter: {project: {id: {eq: $id}}},
      sort: {fields: published_at, order: DESC},
      limit: 3
    ) {
      edges {
        node {
          id
          title
          content
          published_at
          slug
          category {
            slug
            title
          }
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
    otherLangProject: strapiProjects(strapiId: {eq: $otherLangProjectId}) {
      slug
      locale
    }
  }
`;