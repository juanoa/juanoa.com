import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookGrid from "../components/books/bookGrid"

const BooksPage = ({data}) => {

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
        <div className="alert alert-dark" role="alert">
          Libros que he leído y que me parece que pueden seros interesantes. Si compráis
          con los enlaces que os dejo a continuación, apoyaréis a la creación de contenido
          en este blog. <span role="img" aria-label="corazon">❤️</span>️
        </div>
        {years.map(year => (
          <BookGrid books={data.allStrapiBook.edges} year={year} key={year} />
        ))}
      </div>
    </Layout>
  )
}



export default BooksPage

export const pageQuery = graphql`
  query BookQuery {
    allStrapiBook (sort: {order: DESC, fields: readDate}) {
      edges {
        node {
          id
          coverPhoto {
            url
          }
          description
          recommended
          readDate
          link
          title
          author
        }
      }
    }
  }
`