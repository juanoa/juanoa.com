import React from "react";

import FotoJuan from "../../images/juan.jpg";
import {Markdown} from "../structure/markdown";

export const AboutMeSection = ({aboutMeTitle, aboutMeDescription}) => {
  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">01.</span> {aboutMeTitle}
      </h2>

      <div className="row">
        <div className="col-md-7 about__about-me-description">
          <Markdown content={aboutMeDescription} />
          <div className="row">
            <div className="col-6 col-md-4">
              <ul>
                <li className="about__about-me-skill">PHP</li>
                <li className="about__about-me-skill">WordPress</li>
                <li className="about__about-me-skill">HTML & CSS</li>
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
        <div className="col-md-5 text-center">
          <img
            src={FotoJuan}
            alt="Juan Otálora"
            className="rounded about__about-me-image mt-4 mt-md-0"
          />
        </div>
      </div>
    </div>
  );
};