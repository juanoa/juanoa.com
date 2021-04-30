import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/structure/layout";
import SEO from "../components/structure/seo";
import { FaAndroid, FaApple, FaBriefcase, FaGithub, FaStar, MdWeb } from "react-icons/all";
import { graphql } from "gatsby";
import { PostGrid } from "../components/posts/postGrid";

const ProjectTemplate = ({ data, pageContext }) => {

  const {
    title,
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
    company
  } = pageContext;

  const posts = data.allStrapiPost.edges;

  return (
    <Layout>
      <SEO title={`${title} | Proyecto de Juan Otálora`} description={description.slice(0, 140)} />

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
                <div className="mt-4 mb-4">
                  <span className="badge badge-pill badge-dark pt-2 pl-3 pr-3 pb-2">
                    <FaBriefcase className="mr-2" /> {company}
                  </span>
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
                      <MdWeb />
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
                <h3 className="mb-2">Artículos relacionados</h3>
                <PostGrid col={4} posts={posts} showCategory={true} showDescription={false} />
              </div>
            }
            {
              posts.length > 0 && content &&
              <hr />
            }
            {
              content &&
              <ReactMarkdown source={content} escapeHtml={false} />
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query ProjectTemplate($slug: String!) {
    allStrapiPost(
      filter: {project: {slug: {eq: $slug}}},
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
  }
`;