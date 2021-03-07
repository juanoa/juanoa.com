import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input type="text" className="form-control" id="asunto" name="asunto" />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" rows="3" id="mensaje" name="mensaje" />
              </div>
              <div className="mb-3" data-netlify-recaptcha="true" />
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