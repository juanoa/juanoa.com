import React from "react"
import { FaAmazon } from "react-icons/all"

const BookPost = ({book}) => {

  if (!book) return (<></>);

  return (
    <div className="card border-0 bg-light shadow-sm mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-3 book__post-column">
            <img
              src={book.coverPhoto.localFile.publicURL}
              alt={book.title}
            />
          </div>
          <div className="col-9 book__post-column">
            <div className="book__title card-title h5">
              {book.title}
            </div>
            <p className="book__description mt-2 card-text">
              {book.description}
            </p>
            <a
              className="btn btn-warning"
              href={book.link}
              rel="noreferrer nofollow"
              target="_blank"
            > <FaAmazon/> Comprar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPost;