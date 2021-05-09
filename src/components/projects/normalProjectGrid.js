import React from "react";
import {FaInfoCircle} from "react-icons/all";
import { Link } from "gatsby";

export const NormalProjectGrid = ({ projects = [] }) => {

  return (
    <div className="card-columns mt-3">
      {
        projects.map((project) => {

          const {id, title, tech: techs, description, slug} = project.node

          return (
            <div className="card bg-light border-0" key={id}>
              <div className="card-body">
                <h3 className="project__card-title m-0">
                  {title}
                </h3>
                <div>
                  {
                    techs.split(", ").map((tech, i) => (
                      <span key={i} className="badge badge-pill badge-dark mr-2 text-monospace">
                          {tech}
                        </span>
                    ))
                  }
                </div>
                <div className="mt-4 mb-4">
                <span className="project__card-description">
                  {description}
                </span>
                </div>
                <Link
                  to={`/proyectos/${slug}/`}
                  className="stretched-link text-dark"
                >
                  <FaInfoCircle /> Más información
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};