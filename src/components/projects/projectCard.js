import React from "react";
import {FaCode, FaGithub, MdInfo, MdWeb} from "react-icons/all";
import {Link} from "gatsby";

import {createProjectSlug} from "../../helpers/createSlugs";

const ProjectCard = ({ project, lang }) => {
  if (!project) return (<></>);

  const {
    logo,
    slug,
    title,
    description,
    tech: techs,
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
              <span key={i} className="badge badge-pill badge-primary mr-2 text-monospace">{tech}</span>
            ))
          }
        </div>
        <div>
          <Link
            className="btn btn-sm btn-outline-primary mr-2 mt-3"
            to={createProjectSlug(slug, lang)}
          >
            <MdInfo /> <span className="project__post-button-text">{(lang === "es") ? "Más información" : "Show details"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;