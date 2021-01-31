import PropTypes from "prop-types"
import React from "react"
import 'react-icons/fa'

import Logo from '../images/logo.png'

const Header = ({ siteTitle }) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container d-flex nav-container">
      <a className="navbar-brand" href="/">
        <img
          src={Logo}
          width="56"
          height="56"
          className="d-inline-block align-top"
          alt="Juan Otálora"
        />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="/productividad">Productividad</a></li>
          <li className="nav-item"><a className="nav-link" href="/lifestyle">Lifestyle</a></li>
          <li className="nav-item"><a className="nav-link" href="/desarrollo">Desarrollo</a></li>
          <li className="nav-item"><a className="nav-link" href="/economia">Economía</a></li>
          <li className="nav-item"><a className="nav-link" href="/libros">Libros</a></li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="https://cv.juanoa.com">Sobre mi</a></li>
          <li className="nav-item"><a className="nav-link disabled" href="https://cv.juanoa.com">Contacto</a></li>
        </ul>
      </div>
    </div>

  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
