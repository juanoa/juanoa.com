import React from "react"
import {graphql} from "gatsby";

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import {PresentationSection} from "../components/about/presentationSection";
import {AboutMeSection} from "../components/about/aboutMeSection";
import {ContactSection} from "../components/about/contactSection";
import {ExperienceSection} from "../components/about/experienceSection";
import {ProjectsSection} from "../components/about/projectsSection";

const IndexPage = ({data}) => {

  const jobs = data.allStrapiJobs.edges
  const featureProjects = data.allStrapiProjects.edges

  const i18n = {
    actual: 'es',
    languages: [
      {
        lang: 'en',
        url: '/en/'
      },
      {
        lang: 'es',
        url: '/'
      }
    ]
  }

  return (
    <Layout i18n={i18n}>
      <Seo title="Juan Otálora | Ingeniero Informático" i18n={i18n}/>
      <div className="container-fluid homepage">
        <PresentationSection lang="es"/>
        <AboutMeSection lang="es"/>
        <ExperienceSection
          lang="es"
          jobs={jobs}
        />
        <ProjectsSection
          lang="es"
          featureProjects={featureProjects}
        />
        <ContactSection lang="es"/>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexPage {
    allStrapiJobs (
      filter: { locale: {eq: "es"} },
      sort: {order: DESC, fields: date}
    ) {
      edges {
        node {
          id
          title
          company
          location
          url
          range
          achievements
        }
      }
    }
    allStrapiProjects (
      sort: {order: DESC, fields: date},
      filter: {isFeature: {eq: true}, locale: {eq: "es"}}
    ) {
      edges {
        node {
          id
          title
          slug
          description
          tech
          external
          github
          ios
          android
        }
      }
    }
  }
  `