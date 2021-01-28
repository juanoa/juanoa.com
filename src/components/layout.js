/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        buttonText="Las acepto"
        containerClasses="layout__cookie-banner"
        buttonClasses="layout__cookie-banner-button"
      >
        Este sitio web utiliza cookies para mejorar tu experiencia de uso. <a href="/politica-privacidad">Política de privacidad</a>
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
