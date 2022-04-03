import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

export const PresentationSection = ({lang}) => {

  const {site: {siteMetadata: {title}}} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

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
        {title}.
      </h1>
      <h2 className="about__primary-light-title">
        {
          (lang === 'es')
            ? 'Construyo cosas para Internet'
            : 'I build things for the WWW'
        }
      </h2>
      <Link
        to={
          (lang === 'es')
            ? '/contacto/'
            : '/en/contact/'

        }
        className="btn about__button mt-4"
      >
        <span role="img" aria-label="hand">👋</span> {(lang === 'es') ? 'Hablemos' : 'Contact'}
      </Link>
    </div>
  );
};