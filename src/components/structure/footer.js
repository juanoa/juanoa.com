import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

import PersonalPhoto from "../../images/personal.jpg";
import {DynamicFaIcon} from "../../helpers/icons";

const Footer = ({lang}) => {

  const {site: {siteMetadata: {social, footerLinks, title, startYear}}} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            startYear
            social {
              icon
              link
              name
            }
            footerLinks {
              en {
                name
                url
              }
              es {
                name
                url
              }
            }
          }
        }
      }
    `
  );

  return (
    <footer className="pt-4 pt-md-5 pb-md-5 pb-4 border-top mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="footer__avatar"
              src={PersonalPhoto}
              alt={title}
            />
            <p className="mt-3 mb-2 footer__profile-description">
              {
                (lang === 'es')
                  ? 'Mi nombre es Juan Otálora y soy ingeniero informático.'
                  : 'My name is Juan Otálora and I am software engineer.'
              }
            </p>
            <p className="footer__profile-description">
              {
                (lang === 'es')
                  ? 'En este blog personal cuento cosas que me pasan por la cabeza y que creo que otros deberían conocer.'
                  : 'In this personal blog I talk about things that cross my mind and that I think others should know about.'
              }
            </p>
          </div>
          <div className="col-md-3 offset-md-3">
            <h4 className="footer__heading">
              {
                (lang === 'es')
                  ? 'Social'
                  : 'Social links'
              }
            </h4>
            <ul className="footer__interest-links">
              {
                social.map((s, i) => <li key={i}><a href={s.link} target="_blank" rel="noreferrer"><DynamicFaIcon name={s.icon}/> {s.name}</a></li>)
              }
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer__heading">
              {
                (lang === 'es')
                  ? 'Enlaces'
                  : 'Featured links'
              }
            </h4>
            <ul className="footer__interest-links">
              {
                footerLinks[lang].map((link, index) => (
                  <li key={index}><Link to={link.url}>{link.name}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
        <small className="footer__copyright">
          {startYear}-{new Date().getFullYear()} © {(lang === 'es') ? 'Diseñado por' : 'Design by'} <a
          href="https://juanoa.com" className="footer__link">{title}</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;