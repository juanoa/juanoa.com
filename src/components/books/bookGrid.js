import React from "react"
import BookItemGrid from "./bookItemGrid"

const BookGrid = ({books, year}) => {
  const yearBooks = [];
  books.forEach(book => {
    if (new Date(book.node.readDate).getFullYear() === year) yearBooks.push(book)
  })

  if (yearBooks.length === 0) return (<></>);

  return (
    <div className="mt-5 text-center">
      <h2 className="book__year-title">{year}</h2>
      <div className="card-columns">
        {yearBooks.map(book => (
          <BookItemGrid book={book} key={book.node.id} />
        ))}
      </div>
    </div>
  );
}

export default BookGrid;