import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaEnvelope } from "react-icons/all";

const ContactPage = () => {

  return (
    <Layout>
      <SEO title="Contacto" />
      <div className="homepage">
        <h1>Contacto</h1>
        <div className="row">
          <div className="col-md-6">
            <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" >
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Asunto</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea className="form-control" rows="3"/>
              </div>
              <div data-netlify-recaptcha="true" />
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="alert alert-dark text-center" role="alert">
              Reunirse es un comienzo; permanecer juntos es un progreso; trabajar juntos es un éxito.
              <span className="font-italic font-weight-bold"> Henry Ford</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}



export default ContactPage