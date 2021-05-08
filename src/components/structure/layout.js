/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

const Layout = ({ children, langLinks }) => {

  return (
    <>
      <Header langLinks={langLinks}/>
      <main>{children}</main>
      <Footer lang={langLinks.actual} />
      <CookieConsent
        buttonText="Las acepto"
        containerClasses="layout__cookie-banner"
        buttonClasses="layout__cookie-banner-button"
      >
        Este sitio web utiliza cookies para mejorar tu experiencia de uso. <Link to="/politica-privacidad">Política de
        privacidad</Link>
      </CookieConsent>
    </>
  );
};

Layout.defaultProps = {
  langLinks: {
    actual: 'es',
    destinations: []
  },
};

Layout.propTypes = {
  esLangLink: PropTypes.object
};

export default Layout;
