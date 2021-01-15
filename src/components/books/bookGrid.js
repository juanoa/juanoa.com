import React from "react"
import { CardColumns, Row } from "react-bootstrap"
import BookItemGrid from "./bookItemGrid"

const BookGrid = ({books}) => {
  return (
    <>
      <h2>Leídos en 2020</h2>
      <CardColumns>
        {books.map(book => (
          <BookItemGrid book={book} />
        ))}
      </CardColumns>
    </>
  );
}

export default BookGrid;