import React from "react";
import "react-icons/fa";
import {Link} from "gatsby";
import PropTypes from "prop-types";
import {LanguageSelect} from "./languageSelect";

const Header = ({i18n}) => {

  const navBarLinks = {
    es:[
      {name: 'Sobre mi', url: '/'},
      {name: 'Blog', url: '/blog/'},
      {name: 'Proyectos', url: '/proyectos/'},
      {name: 'Contacto', url: '/contacto/'},
    ],
    en: [
      {name: 'About me', url: '/en/'},
      {name: 'Blog', url: '/en/blog/'},
      {name: 'Projects', url: '/en/projects/'},
      {name: 'Contact', url: '/en/contact/'},
    ]
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm pt-0 pb-0 header__navbar">
      <div className="container d-flex header__nav-container">
        <Link className="navbar-brand" to={(i18n.actual === 'es') ? '/' : '/en/'}>
          <span className="header__brand">juanoa</span>
          <span className="header__brand-subtitle">
            Juan Otálora Alarcón
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {
              navBarLinks[i18n.actual].map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" activeClassName="header__nav-link-active" to={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <LanguageSelect i18n={i18n} />
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  esLangLink: ``,
  enLangLink: ``,
  lang: 'es'
};

Header.propTypes = {
  esLangLink: PropTypes.string,
  enLangLink: PropTypes.string,
  lang: PropTypes.string
};

export default Header;
