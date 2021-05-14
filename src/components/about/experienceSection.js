import React from "react";
import {JobsAccordion} from "./jobsAccordion";

export const ExperienceSection = ({lang, jobs}) => {

  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">02.</span> {(lang === 'es') ? 'Experiencia' : 'Where I’ve Worked'}
      </h2>
      <JobsAccordion jobs={jobs}/>
    </div>
  );
};