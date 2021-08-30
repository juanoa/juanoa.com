import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/structure/layout"
import Seo from "../../components/structure/seo"
import { FeatureProjectGrid } from "../../components/projects/featureProjectGrid";
import { NormalProjectGrid } from "../../components/projects/normalProjectGrid";
import {getI18nForPage} from "../../helpers/i18n";

const ProjectsPageEn = ({data}) => {

  const i18n = getI18nForPage('en', '/en/projects/', 'es', '/proyectos/')

  const projects = data.allStrapiProjects.edges
  const featureProjects = projects.filter(project => project.node.isFeature === true)
  const normalProjects = projects.filter(project => project.node.isFeature === false)

  return (
    <Layout i18n={i18n}>
      <Seo title="Projects | Juan Otálora" i18n={i18n} />
      <div className="container-fluid homepage mt-5">
        <FeatureProjectGrid projects={featureProjects} lang="en" />
        <h1 className="mt-5">All projects</h1>
        <NormalProjectGrid projects={normalProjects} lang="en" />
      </div>
    </Layout>
  )
}



export default ProjectsPageEn

export const pageQuery = graphql`
  query ProjectPageEn {
    allStrapiProjects (
      filter: { locale: {eq: "en"} },
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