import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

import { FeatureProjectGrid } from "../projects/featureProjectGrid";

export const ProjectsSection = () => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">03.</span> Proyectos
      </h2>

      <StaticQuery
        query={graphql`
          query ProjectsQuery {
            allStrapiProjects (
              sort: {order: DESC, fields: date},
              filter: {isFeature: {eq: true}}
            ) {
              edges {
                node {
                  id
                  title
                  description
                  tech
                  external
                  github
                  ios
                  android
                }
              }
            }
          }
        `}
        render={data => <FeatureProjectGrid projects={data.allStrapiProjects.edges} />}
      />

      <div className="text-center mt-5">
        <Link className="about__projects-link" to="/proyectos">
          ver todos los proyectos
        </Link>
      </div>
    </div>
  );
};