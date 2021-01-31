import React from "react"
import { FaAmazon } from "react-icons/all"
import { Link } from "gatsby";

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
            <Link
              className="btn btn-warning"
              to={book.link}
              rel="noreferrer nofollow"
              target="_blank"
            > <FaAmazon/> Comprar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPost;