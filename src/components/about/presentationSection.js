import React from "react";
import { Link } from "gatsby";

export const PresentationSection = () => {
  return (
    <div className="about__section">
      <span className="about__presentation-greeting">Hola buenas, soy</span>
      <h1 className="about__presentation-name">Juan Otálora.</h1>
      <h2 className="about__presentation-subtitle">Construyo cosas para Internet</h2>
      <p className="about__presentation-description">
        Soy estudiante de Ingeniería Informática por la Universidad de Murcia y me dedico a desarrollar páginas web
        y aplicaciones web de cualquier tipo.
      </p>
      <Link to="/contacto" className="btn about__presentation-button">
        👋 Hablemos
      </Link>
    </div>
  );
};