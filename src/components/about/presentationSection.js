import React from "react";
import {Link} from "gatsby";

export const PresentationSection = ({lang}) => {

  return (
    <div className="about__section">
      <span className="about__presentation-greeting">
        {
          (lang === 'es')
            ? 'Hola buenas, soy'
            : 'Hi, I\'m'
        }
      </span>
      <h1 className="about__presentation-name">
        Juan Otálora.
      </h1>
      <h2 className="about__primary-light-title">
        {
          (lang === 'es')
            ? 'Construyo cosas para Internet'
            : 'I build things for the WWW'
        }
      </h2>
      <p className="about__presentation-description">
        {
          (lang === 'es')
            ? 'Soy estudiante de Ingeniería Informática por la Universidad de Murcia y me dedico a desarrollar páginas web y aplicaciones web de cualquier tipo.'
            : 'I am a student of Computer Engineering at the University of Murcia and I develop websites and web applications of any type.'
        }
      </p>
      <Link
        to={
          (lang === 'es')
            ? '/contacto/'
            : '/en/contacto/'

        }
        className="btn about__button"
      >
        <span role="img" aria-label="hand">👋</span> {(lang === 'es') ? 'Hablemos' : 'Contact'}
      </Link>
    </div>
  );
};