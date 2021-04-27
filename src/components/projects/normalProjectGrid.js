import React from "react";
import {FaInfoCircle} from "react-icons/all";
import { Link } from "gatsby";

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
              <Link
                to={`/proyectos/${project.node.slug}`}
                className="stretched-link text-dark"
              >
                <FaInfoCircle /> Más información
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};