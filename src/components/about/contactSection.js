import React from "react";
import { Link } from "gatsby";

export const ContactSection = () => {
  return (
    <div className="about__section text-center pb-5">
      <h2 className="about__section-title">
        <span className="about__section-number">04.</span> Contacto
      </h2>
      <h3 className="about__contact-title">¿Por qué no charlamos?</h3>
      <div className="about__contact-fit">
        <p className="text-center about__contact-description">
          Mi bandeja de entrada siempre está abierta para nuevas oportunidades, tanto personales como profesionales.
        </p>
        <Link to="/contacto" className="btn about__contact-button">
          👋 Saludar
        </Link>
      </div>
    </div>
  );
};