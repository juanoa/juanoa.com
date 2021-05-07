import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import { FeatureProjectGrid } from "../components/projects/featureProjectGrid";
import { NormalProjectGrid } from "../components/projects/normalProjectGrid";

const ProjectsPage = ({data}) => {

  const {strapiProjectsPage: text} = data

  const projects = data.allStrapiProjects.edges
  const featureProjects = projects.filter(project => project.node.isFeature === true)
  const normalProjects = projects.filter(project => project.node.isFeature === false)

  return (
    <Layout>
      <Seo title="Proyectos" />
      <div className="container-fluid homepage mt-5">
        <FeatureProjectGrid projects={featureProjects} />
        <h1 className="mt-5">{text.allProjects}</h1>
        <NormalProjectGrid projects={normalProjects} />
      </div>
    </Layout>
  )
}



export default ProjectsPage

export const pageQuery = graphql`
  query ProjectQuery {
    allStrapiProjects (sort: {order: DESC, fields: date}) {
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
    strapiProjectsPage {
      allProjects
    }
  }
`