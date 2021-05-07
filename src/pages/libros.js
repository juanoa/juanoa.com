import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"
import BookGrid from "../components/books/bookGrid"

const BooksPage = ({data}) => {

  const {strapiBooksPage: text} = data

  // Get Arrays of years since 2018
  const first = new Date( "01 July 2018").getFullYear();
  const second = new Date().getFullYear();
  const years = [];
  for(let i = second; i >= first; i--) years.push(i);

  return (
    <Layout>
      <Seo title="Libros recomendados" />
      <div className="homepage">
        <h1>{text.title}</h1>
        <div className="alert alert-dark" role="alert">
          {text.description}
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
    strapiBooksPage {
      title
      description
    }
  }
`