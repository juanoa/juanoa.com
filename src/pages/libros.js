import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookGrid from "../components/books/bookGrid"
import { Alert } from "react-bootstrap"

const IndexPage = ({data}) => {

  // Get Arrays of years since 2018
  const first = new Date( "01 July 2018").getFullYear();
  const second = new Date().getFullYear();
  const years = [];
  for(let i = second; i >= first; i--) years.push(i);

  return (
    <Layout>
      <SEO title="Libros recomendados" />
      <div className="homepage">
        <h1>Libros recomendados</h1>
        <Alert variant="dark">
          Libros que he leído y que me parece que pueden seros interesantes. Si compráis
          con los enlaces que os dejo a continuación, apoyaréis a la creación de contenido
          en este blog. <span role="img" aria-label="corazon">❤️</span>️
        </Alert>
        {years.map(year => (
          <BookGrid books={data.allStrapiBook.edges} year={year} />
        ))}
      </div>
    </Layout>
  )
}



export default IndexPage

export const pageQuery = graphql`
  query BookQuery {
    allStrapiBook (sort: {order: DESC, fields: readDate}) {
      edges {
        node {
          coverPhoto {
            localFile {
              publicURL
            }
          }
          description
          readDate
          link
          title
        }
      }
    }
  }
`