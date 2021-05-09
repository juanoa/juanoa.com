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

  const text = data.strapiAboutPage

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
        <PresentationSection
          greeting={text.greeting}
          subtitle={text.subtitle}
          presentation={text.presentation}
          contactButton={text.contactButton}
        />
        <AboutMeSection
          aboutMeTitle={text.aboutMeTitle}
          aboutMeDescription={text.aboutMeDescription}
        />
        <ExperienceSection
          experienceTitle={text.experienceTitle}
        />
        <ProjectsSection
          projectsTitle={text.projectsTitle}
          projectsAnchorTitle={text.projectsAnchorTitle}
        />
        <ContactSection
          contactTitle={text.contactTitle}
          contactSubtitle={text.contactSubtitle}
          contactDescription={text.contactDescription}
          contactButton={text.contactButton}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexPage {
    strapiAboutPage {
      id
      aboutMeDescription
      aboutMeTitle
      contactButton
      contactDescription
      contactSubtitle
      contactTitle
      experienceTitle
      greeting
      presentation
      projectsAnchorTitle
      projectsTitle
      subtitle
    }
  }
  `