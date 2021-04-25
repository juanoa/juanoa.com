import PropTypes from "prop-types";
import React from "react";
import "react-icons/fa";
import { Link } from "gatsby";

const Header = () => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm header__navbar">
    <div className="container d-flex header__nav-container">
      <Link className="navbar-brand mr-0" to="/">
        <span className="header__brand">juanoa</span>
        <span className="header__brand-subtitle">Ingeniería informática</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/desarrollo">
              Desarrollo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/modelos-mentales">
              Modelos mentales
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/empresa">
              Empresa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/lean">
              Lean
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
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
