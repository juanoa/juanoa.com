import React from "react"

import Layout from "../components/structure/layout"
import SEO from "../components/structure/seo"
import { Presentation } from "../components/about/presentation";
import { AboutMe } from "../components/about/aboutMe";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Juan Otálora | Ingeniero Informático" />
    <div className="container-fluid homepage">
      <Presentation />
      <AboutMe />
    </div>
  </Layout>
)

export default IndexPage