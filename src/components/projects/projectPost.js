import React from "react"
import { FaGithub, MdWeb } from "react-icons/all";

const ProjectPost = ({project}) => {
  if (!project) return (<></>);

  return (
    <div className="media bg-light p-4 mb-4 shadow-sm rounded">
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
        <div className="mb-3">
          {
            project.tech.split(', ').map((tech, i) => (
              <span key={i} className="badge badge-pill badge-primary mr-2">{tech}</span>
            ))
          }
        </div>
        {
          project.external &&
          <a
            className="btn btn-sm btn-light mr-3"
            href={project.external}
            target="_blank"
            rel="noreferrer"
          >
            <MdWeb /> Sitio web
          </a>
        }
        {
          project.github &&
          <a
            className="btn btn-sm btn-dark mr-3"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Repositorio
          </a>
        }

      </div>
    </div>
  );
}

export default ProjectPost;