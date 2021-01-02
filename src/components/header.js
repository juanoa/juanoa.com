import PropTypes from "prop-types"
import React from "react"
import 'react-icons/fa'
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"

import '../style/nav.css'

const Header = ({ siteTitle }) => (

  <Navbar bg="light" expand="lg">
    <div className="container d-flex justify-content-between nav-container">
      <Navbar.Brand href="/">
        <img
          src="https://juanoa.com/wp-content/uploads/2020/10/juanoa-logo-min.png.webp"
          width="56"
          height="56"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/productividad">Productividad</Nav.Link>
          <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
          <Nav.Link href="/desarrollo">Desarrollo</Nav.Link>
          <Nav.Link href="/economia">Economía</Nav.Link>
          <Nav.Link href="#">Libros</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://cv.juanoa.com">Sobre mi</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>

  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
