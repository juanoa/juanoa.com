import React from "react";
import { Link } from "gatsby";

export const ContactSection = ({contactTitle, contactSubtitle, contactDescription, contactButton}) => {
  return (
    <div className="about__section text-center pb-5">
      <h2 className="about__section-title">
        <span className="about__section-number">04.</span> {contactTitle}
      </h2>
      <h3 className="about__primary-light-title">{contactSubtitle}</h3>
      <div className="about__contact-fit">
        <p className="text-center about__contact-description">
          {contactDescription}
        </p>
        <Link to="/contacto" className="btn about__button">
          <span role="img" aria-label="hand">👋</span> {contactButton}
        </Link>
      </div>
    </div>
  );
};