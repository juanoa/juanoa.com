import React from "react";
import { Link } from "gatsby";

export const ContactSection = ({lang}) => {
  return (
    <div className="about__section text-center pb-5">
      <h2 className="about__section-title">
        <span className="about__section-number">04.</span> {(lang === 'es') ? 'Contacto' : 'Contact'}
      </h2>
      <h3 className="about__primary-light-title">
        {
          (lang === 'es')
            ? '¿Por qué no charlamos?'
            : 'Let\'s get in touch!'
        }
      </h3>
      <div className="about__contact-fit">
        <p className="text-center about__contact-description">
          {
            (lang === 'es')
              ? 'Mi bandeja de entrada siempre está abierta para nuevas oportunidades, tanto personales como profesionales.'
              : 'My inbox is always open for new opportunities, both personal and professional.'
          }
        </p>
        <Link
          to=
            {
              (lang === 'es')
                ? '/contacto/'
                : '/en/contact/'
            }
          className="btn about__button"
        >
          <span role="img" aria-label="hand">👋</span> {(lang === 'es') ? 'Contacto' : 'Contact'}
        </Link>
      </div>
    </div>
  );
};