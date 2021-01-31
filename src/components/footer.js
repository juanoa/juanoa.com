import React from "react"
import { FaGithub } from "react-icons/all";
import { Link } from "gatsby";

import FotoJuan from '../images/juan.webp'

const Footer = () => {
  return (
    <footer className="pt-4 pt-md-5 pb-md-5 pb-4 border-top mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4 className="footer__heading">Más sobre mi</h4>
            <img className="footer__avatar" src={FotoJuan} alt="Juan Otálora"/>
            <p className="mt-3 footer__profile-description">
              Mi nombre es Juan Otálora y soy estudiante de ingeniería informática. En este blog personal cuento cosas que me pasan por la cabeza y que creo que otros deberían conocer.
            </p>
          </div>
          <div className="col-md-3 text-center">
            <Link to="https://scrummanager.com/website/c/profile/member.php?id=30425" target="_blank">
              <img
                alt="Scrum Manager Expert"
                src="https://scrummanager.com/website/img/experto-en.png"
                className="mb-4"
              />
            </Link>
          </div>
          <div className="col-md-3">

          </div>
          <div className="col-md-3">
            <h4 className="footer__heading">Enlaces de interés</h4>
            <ul className="footer__interest-links">
              <li><Link to="/politica-privacidad">Política de privacidad</Link></li>
              <li><Link to="/libros">Libros recomendados</Link></li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <small className="footer__copyright">
          juanoa.com © 2018-{new Date().getFullYear()} | Diseñado por <Link to="https://juanoa.com" className="footer__link">Juan Otálora</Link>
          <Link to="https://github.com/juanoa/juanoa.com" target="_blank" className="footer__github"> <FaGithub /> Ver repositorio en GitHub</Link>
        </small>
      </div>
    </footer>
  )
}

export default Footer