import React from "react";
import {Link} from "gatsby";

import {FeatureProjectGrid} from "../projects/featureProjectGrid";

export const ProjectsSection = ({projectsTitle, projectsAnchorTitle, featureProjects}) => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">03.</span> {projectsTitle}
      </h2>
      <FeatureProjectGrid projects={featureProjects}/>
      <div className="text-center mt-5">
        <Link className="text-monospace" to="/proyectos/">
          {projectsAnchorTitle}
        </Link>
      </div>
    </div>
  );
};