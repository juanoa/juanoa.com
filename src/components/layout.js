/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import "../style/layout.css"
import CookieConsent from "react-cookie-consent"

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
        style={{
          background: 'white',
          maxWidth: 350,
          boxShadow: '0 0 6px 0 rgba(0,0,0,0.5)',
          color: 'black',
          marginBottom: 20,
          marginLeft: 20,
          textAlign: 'center',
          padding: 10
        }}
        buttonStyle={{
          background: '#5564eb',
          color: 'white'
        }}
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
