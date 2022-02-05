import React from "react"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import {getI18nForPage} from "../helpers/i18n";

const RoadmapPage = () => {

  const i18n = getI18nForPage('es', '/roadmap-primer-trabajo-desarrollador/', 'en', '/en/roadmap-first-job-developer/')

  return (
    <Layout i18n={i18n}>
      <Seo title="Roadmap para primer trabajo como desarrollador | Juan Otálora" i18n={i18n}/>
      <div className="homepage">
        <div className="container-fluid mt-5 mb-5">
          <h1>Primer trabajo como desarrollador</h1>
          <div className="w-md-50">
            <p className="text-monospace small">Roadmap para tu primer trabajo como desarrollador. Todas las cosas que
              necesitaba saber cuando empecé mi primer trabajo en Inditex y que me hubiese gustado haber aprendido.</p>
            <p className="text-monospace small">A lo largo del roadmap encontrarás principalmente enlaces a diferentes páginas
              web en inglés con información útil sobre cada uno de los campos que he abordado</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h3>Introducción</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">Hola mundo</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Metodologías</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">¿Por qué agile?</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Scrum</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Jira vs GitHub Projects</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Multitasking</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Devops</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">¿Por qué Git?</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">CI</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">CD</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Versioning</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Changelog</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">GitHub actions</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Git FLow</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Squash and merge vs merge commit</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Git Flow vs trunk based development</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Enviroments</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Comunicación</h3>
              <ul>
                <li className="roadmap__link"><a href="https://swagger.io/resources/articles/adopting-an-api-first-approach/#:~:text=An%20API%2Dfirst%20approach%20means,be%20consumed%20by%20client%20applications." target="_blank">API First</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">REST</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Open API</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">GRPC</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Eventos</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">Asincronicidad</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Event-drive architrcture</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Async API</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Kafka</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Avros</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Bases de datos</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">SQL vs NoSQL</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">¿Por qué elegir una base de datos SQL?</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Snowflake</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">MongoDB</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Redis</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Couchbase</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Monitorización</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">Logs</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Analíticas</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Alertas</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Openshift</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Hexagonal y DDD</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">Arquitectura hexagonal</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Microservicios vs monolito</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Desacoplamiento</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Repositorios de dominio e infraestructura</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Domain-driven development</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Value Objects</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Excepciones</a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Testing y QA</h3>
              <ul>
                <li className="roadmap__link"><a href="#" target="_blank">Test-driven development</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Objects mothers</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">¿Qué testear y qué no?</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Cobertura</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Clean code</a></li>
                <li className="roadmap__link"><a href="#" target="_blank">Code smells</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RoadmapPage