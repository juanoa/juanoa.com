import React from "react"

import Layout from "../../components/structure/layout"
import Seo from "../../components/structure/seo"
import {PresentationSection} from "../../components/about/presentationSection";
import {AboutMeSection} from "../../components/about/aboutMeSection";
import {ContactSection} from "../../components/about/contactSection";
import {ExperienceSection} from "../../components/about/experienceSection";
import {ProjectsSection} from "../../components/about/projectsSection";
import {graphql} from "gatsby";

const IndexPageEn = ({data}) => {

  const jobs = data.allStrapiJobs.edges
  const featureProjects = data.allStrapiProjects.edges

  const i18n = {
    actual: 'en',
    languages: [
      {
        lang: 'es',
        url: '/'
      },
      {
        lang: 'en',
        url: '/en/'
      }
    ]
  }

  return (
    <Layout i18n={i18n}>
      <Seo title="Juan Otálora | Computer Engineer" lang="en" i18n={i18n}/>
      <div className="container-fluid homepage">
        <PresentationSection lang="en"/>
        <AboutMeSection lang="en"/>
        <ExperienceSection
          lang="en"
          jobs={jobs}
        />
        <ProjectsSection
          lang="en"
          featureProjects={featureProjects}
        />
        <ContactSection lang="en"/>
      </div>
    </Layout>
  )
}

export default IndexPageEn

export const pageQuery = graphql`
  query indexPageEn {
    allStrapiJobs (
      filter: { locale: {eq: "en"} },
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
      filter: {isFeature: {eq: true}, locale: {eq: "en"}}
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