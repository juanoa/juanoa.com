import React from "react"

import Layout from "../../components/structure/layout"
import Seo from "../../components/structure/seo"
import {PresentationSection} from "../../components/about/presentationSection";
import {AboutMeSection} from "../../components/about/aboutMeSection";
import {ContactSection} from "../../components/about/contactSection";
import {ExperienceSection} from "../../components/about/experienceSection";
import {ProjectsSection} from "../../components/about/projectsSection";

const IndexPageEn = () => {

  const langLinks = {
    actual: 'en',
    languages: [
      {
        lang: 'es',
        url: '/'
      },
      {
        lang: 'en',
        url: '/en'
      }
    ]
  }

  return (
    <Layout langLinks={langLinks}>
      <Seo title="Juan Otálora | Computer Engineer" lang="en" langLinks={langLinks}/>
      <div className="container-fluid homepage">
        <PresentationSection
          greeting="Hi, I'm"
          subtitle="I build things for Internet"
          presentation="I am a student of Computer Engineering at the University of Murcia and I develop websites and web applications of any type."
          contactButton="Contact"
        />
        <AboutMeSection
          aboutMeTitle="About me"
          aboutMeDescription={`Hi, I'm Juan, a student of Computer Engineering in Murcia (🇪🇸).\n\nI combine my studies at the University of Murcia with my own projects, freelancer jobs and self-education.\n\nHere are some of the technologies I have worked with recently:`}
        />
        <ExperienceSection
          experienceTitle="Where I’ve Worked"
        />
        <ProjectsSection
          projectsTitle="Projects"
          projectsAnchorTitle="show all projects"
        />
        <ContactSection
          contactTitle="Contact"
          contactSubtitle="Let's get in touch!"
          contactDescription="My inbox is always open for new opportunities, personal and professional."
          contactButton="Contact"
        />
      </div>
    </Layout>
  )
}

export default IndexPageEn