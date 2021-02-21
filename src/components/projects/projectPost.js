import React from "react"
import { FaGithub, GoInfo, MdWeb } from "react-icons/all";

const ProjectPost = ({project}) => {
  if (!project) return (<></>);

  return (
    <div className="media bg-light p-4 mb-4 shadow rounded">
      {
        project.logo &&
        <img
          className="mr-3 project__post-logo"
          src={project.logo.localFile.publicURL}
          alt={project.title}
        />
      }

      <div className="media-body">
        <h4 className="mt-0 mb-2 project__post-title">{project.title}</h4>
        <p className="project__post-description mb-1">{project.description}</p>
        <div>
          {
            project.tech.split(', ').map((tech, i) => (
              <span key={i} className="badge badge-pill badge-primary mr-2">{tech}</span>
            ))
          }
        </div>
        <div>
          {
            project.external &&
            <a
              className="btn btn-sm btn-outline-primary mr-2 mt-3"
              href={project.external}
              target="_blank"
              rel="noreferrer"
            >
              <MdWeb /> <span className="project__post-button-text">Sitio web</span>
            </a>
          }
          <a
            className="btn btn-sm btn-info mr-2 mt-3 disabled"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <GoInfo /> <span className="project__post-button-text">Más información</span>
          </a>
          {
            project.github &&
            <a
              className="btn btn-sm btn-dark mr-2 mt-3"
              href={project.github}
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
}

export default ProjectPost;