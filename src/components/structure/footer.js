import React from "react";
import {Link} from "gatsby";

import FotoJuan from "../../images/juan.jpg";

const Footer = ({lang}) => {

  const featuredLinks = {
    es: [
      {name: 'Sobre mi', url: '/'},
      {name: 'Blog', url: '/blog/'},
      {name: 'Proyectos', url: '/proyectos/'},
      {name: 'Contacto', url: '/contacto/'},
      {name: 'Libros recomendados', url: '/libros/'},
      {name: 'Política de privacidad', url: '/politica-privacidad/'},
    ],
    en: [
      {name: 'About me', url: '/en/'},
      {name: 'Contact', url: '/en/contact/'},
    ]
  }

  const categoriesLink = {
    es: [
      {name: 'Modelos mentales', url: '/modelos-mentales/'},
      {name: 'Desarrollo', url: '/desarrollo/'},
      {name: 'Empresa', url: '/empresa/'},
      {name: 'Tecnología', url: '/tecnologia/'},
    ],
    en: []
  }

  return (
    <footer className="pt-4 pt-md-5 pb-md-5 pb-4 border-top mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              className="footer__avatar"
              src={FotoJuan}
              alt="Juan Otálora"
            />
            <p className="mt-3 mb-2 footer__profile-description">
              {
                (lang === 'es')
                  ? 'Mi nombre es Juan Otálora y soy estudiante de ingeniería informática.'
                  : 'My name is Juan Otálora and I am a student of Computer Engineering.'
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
          <div className="col-md-3 text-center">
            <a href="https://scrummanager.com/website/c/profile/member.php?id=30425" target="_blank" rel="noreferrer">
              <img
                alt="Scrum Manager Expert"
                src="https://scrummanager.com/website/img/experto-en.png"
                className="mb-4"
              />
            </a>
          </div>
          <div className="col-md-3">
            <h4 className="footer__heading">Blog</h4>
            <ul className="footer__interest-links">
              {
                categoriesLink[lang].map((link, index) => (
                  <li key={index}><Link to={link.url}>{link.name}</Link></li>
                ))
              }
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer__heading">
              {
                (lang === 'es')
                  ? 'Enlaces de interés'
                  : 'Featured links'
              }
            </h4>
            <ul className="footer__interest-links">
              {
                featuredLinks[lang].map((link, index) => (
                  <li key={index}><Link to={link.url}>{link.name}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
        <small className="footer__copyright">
          juanoa.com © 2018-{new Date().getFullYear()} | {(lang === 'es') ? 'Diseñado por' : 'Design by'} <a
          href="https://juanoa.com" className="footer__link">Juan Otálora</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;