import React from "react";
import { FaCode, FaGithub, MdWeb } from "react-icons/all";

const ProjectCard = ({ project }) => {
  if (!project) return (<></>);

  const {
    logo,
    title,
    description,
    tech: techs,
    external,
    docs,
    github
  } = project;

  return (
    <div className="media bg-light p-4 mb-4 shadow rounded">
      {
        logo &&
        <img
          className="mr-3 project__post-logo"
          src={logo.localFile.publicURL}
          alt={title}
        />
      }

      <div className="media-body">
        <h4 className="mt-0 mb-2 project__post-title">{title}</h4>
        <p className="project__post-description mb-1">{description}</p>
        <div>
          {
            techs.split(", ").map((tech, i) => (
              <span key={i} className="badge badge-pill badge-primary mr-2">{tech}</span>
            ))
          }
        </div>
        <div>
          {
            external &&
            <a
              className="btn btn-sm btn-outline-primary mr-2 mt-3"
              href={external}
              target="_blank"
              rel="noreferrer"
            >
              <MdWeb /> <span className="project__post-button-text">Sitio web</span>
            </a>
          }
          {
            docs &&
            <a
              className="btn btn-sm btn-outline-primary mr-2 mt-3"
              href={docs}
              target="_blank"
              rel="noreferrer"
            >
              <FaCode /> <span className="project__post-button-text">Documentación</span>
            </a>
          }
          {
            github &&
            <a
              className="btn btn-sm btn-dark mr-2 mt-3"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> <span className="project__post-button-text">Repositorio</span>
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;