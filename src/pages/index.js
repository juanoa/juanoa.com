import React from "react"

import Layout from "../components/structure/layout"
import SEO from "../components/structure/seo"
import { PresentationSection } from "../components/about/presentationSection";
import { AboutMeSection } from "../components/about/aboutMeSection";
import { ContactSection } from "../components/about/contactSection";
import { ExperienceSection } from "../components/about/experienceSection";
import { ProjectsSection } from "../components/about/projectsSection";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Juan Otálora | Ingeniero Informático" />
    <div className="container-fluid homepage">
      <PresentationSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </Layout>
)

export default IndexPage