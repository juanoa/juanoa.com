import React from "react";
import "react-icons/fa";
import {Link} from "gatsby";
import PropTypes from "prop-types";
import {LanguageSelect} from "../structure/languageSelect";
import {NavLink} from "./navLink";

import Medium from './icons/medium.png'
import Substack from './icons/substack.png'
import Juanoa from './icons/juanoa.png'
import Mirror from './icons/mirror.png'

const Header = ({i18n}) => {

  const navBarLinks = {
    es:[
      {name: 'Sobre mi', url: '/'},
      {
        name: 'Posts',
        subLinks: [
          {
            name: 'Blog',
            url: '/blog/',
            icon: Juanoa,
            internal: true
          },
          {
            name: 'Medium (EN)',
            url: 'https://juanoa.medium.com/',
            icon: Medium,
            internal: false
          },
          {
            name: 'Mirror (EN)',
            url: 'https://mirror.xyz/0xcd8669693ec034BAb890709a1089DC9C9a2F80c4',
            icon: Mirror,
            internal: false
          },
          {
            name: 'Substack',
            url: 'https://errarehumanumest.substack.com/',
            icon: Substack,
            internal: false
          },
        ]
      },
      {name: 'Proyectos', url: '/proyectos/'},
      {name: 'Roadmap', url: '/roadmap-primer-trabajo-desarrollador/'},
      {name: 'Contacto', url: '/contacto/'},
    ],
    en: [
      {name: 'About me', url: '/en/'},
      {
        name: 'Posts',
        subLinks: [
          {
            name: 'Blog',
            url: '/en/blog/',
            icon: Juanoa
          },
          {
            name: 'Medium',
            url: 'https://juanoa.medium.com/',
            icon: Medium
          },
          {
            name: 'Mirror',
            url: 'https://mirror.xyz/0xcd8669693ec034BAb890709a1089DC9C9a2F80c4',
            icon: Mirror
          },
          {
            name: 'Substack (ES)',
            url: 'https://errarehumanumest.substack.com/',
            icon: Substack
          },
        ]
      },
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
                <NavLink link={link} key={index} />
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
