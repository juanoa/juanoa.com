import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import sad from '../images/sad.png'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" index={false} />
    <div className="page-content text-center mt-5 mb-5">
        <h1>Error 404: página no encontrada</h1>
        <p>Vaya... Parece que has intentado acceder a una página que ya no existe o se ha movido de sitio. Mis disculpas.</p>
        <img src={sad} width="300px"  alt="sad"/>
        <p><a className="btn btn-outline-secondary" href="/">Ir a la página principal</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
