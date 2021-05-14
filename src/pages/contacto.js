import React from "react"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import Map from "../components/map";

const ContactPage = () => {

  const i18n = {
    actual: 'es',
    languages: [
      {
        lang: 'es',
        url: '/contacto/'
      },
      {
        lang: 'en',
        url: '/en/contact/'
      }
    ]
  }

  return (
    <Layout i18n={i18n}>
      <Seo title="Contacto" description="¿Quieres ponerte en contacto conmigo? Utiliza este formulario para hacerlo." i18n={i18n} />
      <div className="homepage">
        <h1>Contacto</h1>
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
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input
                  type="text"
                  className="form-control"
                  id="asunto"
                  name="asunto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="mensaje"
                  name="mensaje"
                />
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="alert alert-light text-center" role="alert">
              Como no soy una tienda, no puedo poner mi ubicación, pero sí los países en los que he estado.
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