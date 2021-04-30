import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {JobsAccordion} from "./jobsAccordion";

export const ExperienceSection = () => {

  const {allStrapiJobs: {edges: jobs}} = useStaticQuery(
    graphql`
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
    `
  )

  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">02.</span> Experiencia
      </h2>
      <JobsAccordion jobs={jobs}/>
    </div>
  );
};