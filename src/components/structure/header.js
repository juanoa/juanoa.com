import React from "react";
import "react-icons/fa";
import {Link} from "gatsby";
import PropTypes from "prop-types";

const Header = ({langLinks}) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm pt-0 pb-0 header__navbar">
    <div className="container d-flex header__nav-container">
      <Link className="navbar-brand" to="/">
        <span className="header__brand">juanoa</span>
        <span className="header__brand-subtitle">ingeniero informático</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/">
              Sobre mi
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/proyectos">
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/libros">
              Libros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="header__nav-link-active" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
        {
          langLinks.languages &&
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                {langLinks.actual.toUpperCase()}
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {
                  langLinks.languages.filter(l => l.lang !== langLinks.actual).map(dest => (
                    <Link className="dropdown-item" key={dest.lang} to={dest.url}>
                      {dest.lang.toUpperCase()}
                    </Link>
                  ))
                }
              </div>
            </li>
          </ul>
        }

      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  esLangLink: ``,
  enLangLink: ``
};

Header.propTypes = {
  esLangLink: PropTypes.string,
  enLangLink: PropTypes.string
};

export default Header;
