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

const Layout = ({ children, i18n }) => {

  return (
    <>
      <Header i18n={i18n}/>
      <main>{children}</main>
      <Footer lang={i18n.actual} />
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
  i18n: {
    actual: 'es',
    destinations: []
  },
};

Layout.propTypes = {
  esLangLink: PropTypes.object
};

export default Layout;
