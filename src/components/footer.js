import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import '../style/footer.css'

const Footer = () => {
  return (
    <footer className="pt-4 pt-md-5 pb-md-5 pb-4 border-top mt-5 bg-dark">
      <Container>
        <Row>
          <Col md={3}>
            <h4>Más sobre mi</h4>
            <img className="avatar" src={"https://juanoa.com/wp-content/uploads/2020/04/foto-linkedin-camisa-azul-150x150.jpg.webp"} alt="Juan Otálora"/>
            <p className="mt-3">
              Mi nombre es Juan Otálora y soy estudiante de ingeniería informática. En este blog personal cuento cosas que me pasan por la cabeza y que creo que otros deberían conocer.
            </p>
          </Col>
          <Col md={3} className={"text-center"}>
            <a href="https://scrummanager.com/website/c/profile/member.php?id=30425">
              <img alt="Scrum Manager Expert" src="https://scrummanager.com/website/img/experto-en.png" />
            </a>
          </Col>
          <Col md={3} className={"text-center"}>

          </Col>
          <Col md={3}>
            <h4>Enlaces de interés</h4>
            <ul className="enlaces-interes">
              <li>Política de privacidad</li>
              <li>Recomendaciones</li>
              <li>Contacto</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;