import React from "react";

import FotoJuan from "../../images/juan.jpg";

export const AboutMeSection = () => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">01.</span> Sobre mi
      </h2>

      <div className="row">
        <div className="col-md-7 about__about-me-description">
          <p>
            ¡Hola! Soy Juan, estudiante de Ingeniería Informática en Murcia (<span role="img" aria-label="spain">🇪🇸</span>).
          </p>
          <p>
            Compagino mis estudios en la Universidad de Murcia con proyectos propios, trabajos de freelancer y formación.
          </p>
          <p>
            Aquí tienes algunas tecnologías con las que he trabajado recientemente:
          </p>
          <div className="row">
            <div className="col-6 col-md-4">
              <ul>
                <li className="about__about-me-skill">PHP</li>
                <li className="about__about-me-skill">WordPress</li>
                <li className="about__about-me-skill">HTML y CSS</li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <ul>
                <li className="about__about-me-skill">Symphony</li>
                <li className="about__about-me-skill">JavaScript (ES6+)</li>
                <li className="about__about-me-skill">React</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="offset-md-1 col-md-4 text-center">
          <img
            src={FotoJuan}
            alt="Juan Otálora"
            className="rounded about__about-me-image"
          />
        </div>
      </div>
    </div>
  );
};