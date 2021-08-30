import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import { FeatureProjectGrid } from "../components/projects/featureProjectGrid";
import { NormalProjectGrid } from "../components/projects/normalProjectGrid";
import {getI18nForPage} from "../helpers/i18n";

const ProjectsPage = ({data}) => {

  const i18n = getI18nForPage('es', '/proyectos/', 'en', '/en/projects/')

  const projects = data.allStrapiProjects.edges
  const featureProjects = projects.filter(project => project.node.isFeature === true)
  const normalProjects = projects.filter(project => project.node.isFeature === false)

  return (
    <Layout i18n={i18n}>
      <Seo title="Proyectos | Juan Otálora" i18n={i18n} />
      <div className="container-fluid homepage mt-5">
        <FeatureProjectGrid projects={featureProjects} lang="es" />
        <h1 className="mt-5">Todos los proyectos</h1>
        <NormalProjectGrid projects={normalProjects} lang="es" />
      </div>
    </Layout>
  )
}



export default ProjectsPage

export const pageQuery = graphql`
  query ProjectPageEs {
    allStrapiProjects (
      filter: { locale: {eq: "es"} },
      sort: {order: DESC, fields: date}
    ) {
      edges {
        node {
          id
          slug
          title
          description
          isFeature
          tech
          logo {
            url
          }
        }
      }
    }
  }
`