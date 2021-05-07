import React from "react"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import Map from "../components/map";
import {graphql} from "gatsby";

const ContactPage = ({data}) => {

  const {strapiContactPage: text} = data

  return (
    <Layout>
      <Seo title="Contacto" description="¿Quieres ponerte en contacto conmigo? Utiliza este formulario para hacerlo." />
      <div className="homepage">
        <h1>{text.title}</h1>
        <div className="row">
          <div className="col-md-6">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              autoComplete="off"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <label htmlFor="nombre">{text.nameLabel}</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{text.emailLabel}</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="asunto">{text.subjectLabel}</label>
                <input
                  type="text"
                  className="form-control"
                  id="asunto"
                  name="asunto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">{text.messageLabel}</label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="mensaje"
                  name="mensaje"
                />
              </div>
              <button type="submit" className="btn btn-primary">{text.sendButton}</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="alert alert-light text-center" role="alert">
              {text.mapDescription}
              <span role="img" aria-label="plane"> 🛫️</span>️
            </div>
            <Map />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query contactPage {
    strapiContactPage {
      emailLabel
      mapDescription
      messageLabel
      nameLabel
      sendButton
      subjectLabel
      title
    }
  }
  `