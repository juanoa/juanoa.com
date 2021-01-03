import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import '../style/footer.css'
import FotoJuan from '../images/juan.webp'

const Footer = () => {
  return (
    <footer className="pt-4 pt-md-5 pb-md-5 pb-4 border-top mt-5 bg-dark">
      <Container>
        <Row>
          <Col md={3}>
            <h4>Más sobre mi</h4>
            <img className="avatar" src={FotoJuan} alt="Juan Otálora"/>
            <p className="mt-3">
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
            <h4>Enlaces de interés</h4>
            <ul className="enlaces-interes">
              <li><a href="/politica-privacidad">Política de privacidad</a></li>
              <li>Recomendaciones</li>
              <li>Contacto</li>
            </ul>
          </Col>
        </Row>
        <small>Juan Otálora Alarcón © 2018-{new Date().getFullYear()}. Todos los derechos reservados</small>
      </Container>
    </footer>
  )
}

export default Footer;