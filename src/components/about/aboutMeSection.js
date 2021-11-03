import React from "react";

import PersonalPhoto from "../../images/personal.jpg";
import {Markdown} from "../structure/markdown";

export const AboutMeSection = ({lang}) => {

  let description;
  if (lang === "es") {
    description= "¡Hola! Soy Juan, Ingeniero Informático y vivo en La Coruña (🇪🇸).\n" +
      "\n" +
      "Soy ingeniero de software en Inditex, trabajando en el e-commerce de Zara.\n" +
      "\n" +
      "Aquí tienes algunas tecnologías con las que he trabajado recientemente:"
  } else {
    description = "Hi, It's Juan, Computer Engineer from Spain 🇪🇸.\n" +
      "\n" +
      "Currently, I'm software engineer at Inditex, working on ZARA's e-commerce.\n" +
      "\n" +
      "Here are some of the technologies I have worked with recently:"
  }

  return (
    <div className="about__section">
      <h2 className="about__section-title">
        <span className="about__section-number">01.</span> {(lang === 'es') ? 'Sobre mi' : 'About me'}
      </h2>

      <div className="row">
        <div className="col-md-7 about__about-me-description">
          <Markdown content={description}/>
          <div className="row">
            <div className="col-6 col-md-4">
              <ul>
                <li className="about__about-me-skill">Java</li>
                <li className="about__about-me-skill">JavaScript (ES6+)</li>
                <li className="about__about-me-skill">HTML & CSS</li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <ul>
                <li className="about__about-me-skill">Spring boot</li>
                <li className="about__about-me-skill">React</li>
                <li className="about__about-me-skill">Git / GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img
            src={PersonalPhoto}
            alt="Personal"
            className="rounded about__about-me-image mt-4 mt-md-0"
          />
        </div>
      </div>
    </div>
  );
};