import React from "react";
import {Link} from "gatsby";

import {FeatureProjectGrid} from "../projects/featureProjectGrid";

export const ProjectsSection = ({lang, featureProjects}) => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">03.</span> {(lang === 'es') ? 'Proyectos' : 'Projects'}
      </h2>
      <FeatureProjectGrid projects={featureProjects} lang={lang} />
      <div className="text-center mt-5">
        <Link
          className="text-monospace"
          to={
            (lang === 'es')
              ? '/proyectos/'
              : '/en/projects/'
          }
        >
          {
            (lang === 'es')
              ? 'ver todos los proyectos'
              : 'show all projects'
          }
        </Link>
      </div>
    </div>
  );
};