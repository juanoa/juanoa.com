import React from "react"

import Layout from "../../components/structure/layout"
import Seo from "../../components/structure/seo"
import Map from "../../components/map";

const ContactPageEn = () => {

  const i18n = {
    actual: 'en',
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
      <Seo title="Contact" description="My inbox is always open for new opportunities, personal and professional."  i18n={i18n}/>
      <div className="homepage">
        <h1>Contact</h1>
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
                <label htmlFor="nombre">Name</label>
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
                <label htmlFor="asunto">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="asunto"
                  name="asunto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="mensaje"
                  name="mensaje"
                />
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="alert alert-light text-center" role="alert">
              Since I'm not a store, I can't put my location, but I can put the countries I've been to.
              <span role="img" aria-label="plane"> 🛫️</span>️
            </div>
            <Map />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default ContactPageEn