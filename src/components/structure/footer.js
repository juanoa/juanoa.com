import React from "react";
import { Link } from "gatsby";

import FotoJuan from "../../images/juan.jpg";

const Footer = () => {
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
              Mi nombre es Juan Otálora y soy estudiante de ingeniería informática.
            </p>
            <p className="footer__profile-description">
              En este blog personal cuento cosas que me pasan por la cabeza y que creo que otros deberían conocer.
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
              <li><Link to="/modelos-mentales">Modelos mentales</Link></li>
              <li><Link to="/desarrollo">Desarrollo</Link></li>
              <li><Link to="/empresa">Empresa</Link></li>
              <li><Link to="/tecnologia">Tecnología</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="footer__heading">Enlaces de interés</h4>
            <ul className="footer__interest-links">
              <li><Link to="/politica-privacidad">Política de privacidad</Link></li>
              <li><Link to="/libros">Libros recomendados</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <small className="footer__copyright">
          juanoa.com © 2018-{new Date().getFullYear()} | Diseñado por <a href="https://juanoa.com"
                                                                         className="footer__link">Juan Otálora</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;