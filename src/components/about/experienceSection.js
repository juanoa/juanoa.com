import React from "react";

export const ExperienceSection = () => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">02.</span> Experiencia
      </h2>

      <div className="accordion mt-3" id="accordion">

        <div className="card">
          <div className="card-header about__experience-card-header" id="headingOne">
            <h2 className="mb-0 pb-0">
              <button className="btn btn-block text-left p-0 about__experience-job-title" type="button" data-toggle="collapse"
                      data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Desarrollador Full Stack <span className="about__experience-job-company">@ Freelancer</span>
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body pt-0">
              <span className="about__experience-job-range">Mayo 2018 - Actualidad</span>
              <ul className="mt-3">
                <li className="about__experience-achievement">Desarrollo de sitios web en WordPress</li>
                <li className="about__experience-achievement">Desarrollo de aplicaciones web en PHP y Symfony</li>
                <li className="about__experience-achievement">Desarrollo de aplicaciones web en React, Node y Gatsby</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header about__experience-card-header" id="headingTwo">
            <h2 className="mb-0 pb-0">
              <button className="btn btn-block text-left p-0 about__experience-job-title" type="button" data-toggle="collapse"
                      data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Desarrollador en prácticas <span className="about__experience-job-company">@ PcComponentes</span>
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body pt-0">
              <span className="about__experience-job-range">Mayo 2018 - Actualidad</span>
              <ul className="mt-3">
                <li className="about__experience-achievement">Trabajos de back-end en la tienda online</li>
                <li className="about__experience-achievement">Mejora de mis conocimientos en PHP y el framework Symphony</li>
                <li className="about__experience-achievement">Mejora de mis conocimientos en REST API</li>
                <li className="about__experience-achievement">Mejora de mis conocimientos en procesos asíncronos</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};