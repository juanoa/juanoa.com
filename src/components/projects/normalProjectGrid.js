import React from "react";
import { FaCode, FaGithub, MdWeb } from "react-icons/all";

export const NormalProjectGrid = ({ projects = [] }) => {

  return (
    <div className="card-columns mt-3">
      {
        projects.map((project, index) => (
          <div className="card bg-light border-0" key={project.node.id}>
            <div className="card-body">
              <h3 className="card-title h5 m-0 about__projects-title">
                {project.node.title}
              </h3>
              <div>
                {
                  project.node.tech.split(", ").map((tech, i) => (
                    <span key={i} className="badge badge-pill badge-dark mr-2 text-monospace">
                    {tech}
                  </span>
                  ))
                }
              </div>
              <div className="mt-4 mb-4">
                <span className="about__projects-description">
                  {project.node.description}
                </span>
              </div>
              {
                project.node.external &&
                <a
                  href={project.node.external}
                  className="card-link about__projects-external-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MdWeb />
                </a>
              }
              {
                project.node.github &&
                <a
                  href={project.node.github}
                  className="card-link about__projects-external-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              }
              {
                project.node.docs &&
                <a
                  href={project.node.docs}
                  className="card-link about__projects-external-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaCode />
                </a>
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};