import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import FotoJuan from '../images/juan.webp'
import { FaGithub } from "react-icons/all";

const Footer = () => {
  return (
    <footer className="pt-4 pt-md-5 pb-md-5 pb-4 border-top mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h4 className="footer__heading">Más sobre mi</h4>
            <img className="footer__avatar" src={FotoJuan} alt="Juan Otálora"/>
            <p className="mt-3 footer__profile-description">
              Mi nombre es Juan Otálora y soy estudiante de ingeniería informática. En este blog personal cuento cosas que me pasan por la cabeza y que creo que otros deberían conocer.
            </p>
          </Col>
          <Col md={3} className={"text-center"}>
            <a href="https://scrummanager.com/website/c/profile/member.php?id=30425">
              <img
                alt="Scrum Manager Expert"
                src="https://scrummanager.com/website/img/experto-en.png"
                className="mb-4"
              />
            </a>
          </Col>
          <Col md={3} className={"text-center"}>

          </Col>
          <Col md={3}>
            <h4 className="footer__heading">Enlaces de interés</h4>
            <ul className="footer__interest-links">
              <li><a href="/politica-privacidad">Política de privacidad</a></li>
              <li><a href="/libros">Libros recomendados</a></li>
              <li>Contacto</li>
            </ul>
          </Col>
        </Row>
        <small className="footer__copyright">
          juanoa.com © 2018-{new Date().getFullYear()} | Diseñado por <a href="https://juanoa.com" className="footer__link">Juan Otálora</a>
          <a href="https://github.com/juanoa/juanoa.com" className="footer__github"> <FaGithub /> Ver repositorio en GitHub</a>
        </small>
      </Container>
    </footer>
  )
}

export default Footer;