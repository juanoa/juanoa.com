import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { JobsAccordion } from "./jobsAccordion";

export const ExperienceSection = ({ data }) => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">02.</span> Experiencia
      </h2>

      <div className="accordion mt-3" id="accordion">
        <StaticQuery
          query={graphql`
          query JobQuery {
            allStrapiJobs (sort: {order: DESC, fields: date}) {
              edges {
                node {
                  id
                  title
                  company
                  location
                  url
                  range
                  achievements
                }
              }
            }
          }
        `}
          render={data => <JobsAccordion data={data} />}
        />
      </div>
    </div>
  );
};