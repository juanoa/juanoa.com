import React from "react";
import {Link} from "gatsby";

export const PresentationSection = ({greeting, subtitle, presentation, contactButton}) => {

  return (
    <div className="about__section">
      <span className="about__presentation-greeting">{greeting}</span>
      <h1 className="about__presentation-name">Juan Otálora.</h1>
      <h2 className="about__primary-light-title">{subtitle}</h2>
      <p className="about__presentation-description">
        {presentation}
      </p>
      <Link to="/contacto" className="btn about__button">
        <span role="img" aria-label="hand">👋</span> {contactButton}
      </Link>
    </div>
  );
};