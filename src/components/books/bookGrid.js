import React from "react"
import { CardColumns } from "react-bootstrap"
import BookItemGrid from "./bookItemGrid"

const BookGrid = ({books, year}) => {
  const yearBooks = [];
  books.forEach(book => {
    if (new Date(book.node.readDate).getFullYear() === year) yearBooks.push(book)
  })

  if (yearBooks.length === 0) return (<></>);

  return (
    <div className="mt-5 text-center">
      <h2 className="book-year">{year}</h2>
      <CardColumns>
        {yearBooks.map(book => (
          <BookItemGrid book={book} />
        ))}
      </CardColumns>
    </div>
  );
}

export default BookGrid;