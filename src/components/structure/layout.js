/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import CookieConsent from "react-cookie-consent";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
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

export default Layout;
