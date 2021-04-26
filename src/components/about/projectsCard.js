import React from "react";

export const ProjectsCard = ({ data }) => {

  const projects = data.allStrapiProjects.edges;

  return (
    <div className="card-deck">
      {
        projects.map((project, index) => (
          <div className="card" key={project.node.id}>
            <div className="card-body d-flex align-content-between flex-wrap about__projects-card-body">
              <h3 className="card-title h5 m-0">
                {project.node.title}
              </h3>
              <div>
                {
                  project.node.tech.split(", ").map((tech, i) => (
                    <span key={i} className="badge badge-pill badge-primary mr-2 text-monospace">
                    {tech}
                  </span>
                  ))
                }
              </div>
              <p className="card-text mt-3 small">
                {project.node.description}
              </p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>

          </div>
        ))
      }
    </div>
  );
};