import PropTypes from "prop-types"
import React from "react"
import 'react-icons/fa'
import { Link } from "gatsby";

import Logo from '../images/logo.png'

const Header = ({ siteTitle }) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light header__navbar">
    <div className="container d-flex header__nav-container">
      <Link className="navbar-brand" to="/">
        <img
          src={Logo}
          width="56"
          height="56"
          className="d-inline-block align-top"
          alt="Juan Otálora"
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/productividad">
              Productividad
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/lifestyle">
              Lifestyle
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/desarrollo">
              Desarrollo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/economia">
              Economía
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/libros">
              Libros
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="https://cv.juanoa.com">
              Sobre mi
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" activeClassName="header__nav-link-active" to="#">
              Contacto
            </Link>
          </li>
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
