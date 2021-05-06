import React from "react";

export const JobsAccordion = ({jobs}) => {

  return (
    <div className="accordion mt-3" id="accordion">
      {
        jobs.map((job, index) => (
          <div className="card" key={job.node.id}>
            <div className="card-header about__experience-card-header" id={`heading${index}`}>
              <h2 className="mb-0 pb-0">
                <button className="btn btn-block text-left p-0 about__experience-job-title" type="button" data-toggle="collapse"
                        data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`} >
                  {job.node.title} <span className="about__experience-job-company">@ {job.node.company}</span>
                </button>
              </h2>
            </div>
            <div id={`collapse${index}`} className={`collapse ${index === 0 && 'show'}`} aria-labelledby={`heading${index}`} data-parent="#accordion">
              <div className="card-body pt-0">
                <span className="about__experience-job-range">{job.node.range}</span>
                <div
                  className="about__experience-achievements mt-3"
                >
                  {job.node.achievements}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};