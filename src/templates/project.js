import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../components/structure/layout";
import SEO from "../components/structure/seo";
import { FaAndroid, FaApple, FaGithub, FaStar, MdWeb } from "react-icons/all";

const ProjectTemplate = ({data, pageContext}) => {

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
    description
  } = pageContext

  return (
    <Layout>
      <SEO title={title} description={description.slice(0, 140)} />

      <div className="container-fluid homepage mt-5">
        <div className="row">
          <div className="col-md-4 mb-sm-4">
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
                      width={65}/>
                  </div>
                }
                <h1 className="card-title h3 font-weight-bold">
                  {title}
                </h1>
                {
                  tech.split(", ").map((tech, i) => (
                    <span key={i} className="badge badge-pill badge-primary mr-2 text-monospace">
                    {tech}
                  </span>
                  ))
                }
                <div className="mt-4 mb-4">
                  <small>{description}</small>
                </div>
                <div>
                  {
                    external &&
                    <a
                      href={external}
                      className="card-link about__projects-external-link"
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
                      className="card-link about__projects-external-link"
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
                      className="card-link about__projects-external-link"
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
                      className="card-link about__projects-external-link"
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
              content &&
              <div className="card">
                <div className="card-body bg-light">
                  <ReactMarkdown source={content} escapeHtml={false} />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectTemplate