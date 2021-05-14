import React from "react";
import {JobsAccordion} from "./jobsAccordion";

export const ExperienceSection = ({experienceTitle, jobs}) => {

  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">02.</span> {experienceTitle}
      </h2>
      <JobsAccordion jobs={jobs}/>
    </div>
  );
};