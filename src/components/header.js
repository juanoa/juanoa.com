import PropTypes from "prop-types"
import React from "react"
import 'react-icons/fa'
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"

import Logo from '../images/logo.png'

const Header = ({ siteTitle }) => (

  <Navbar bg="light" expand="lg">
    <div className="container d-flex justify-content-between nav-container">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="56"
          height="56"
          className="d-inline-block align-top"
          alt="Juan Otálora"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/productividad">Productividad</Nav.Link>
          <Nav.Link href="/lifestyle">Lifestyle</Nav.Link>
          <Nav.Link href="/desarrollo">Desarrollo</Nav.Link>
          <Nav.Link href="/economia">Economía</Nav.Link>
          <Nav.Link href="/libros">Libros</Nav.Link>
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
