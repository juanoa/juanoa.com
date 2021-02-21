import React from "react"
import { FaAmazon } from "react-icons/all";

const BookPost = ({book}) => {

  if (!book) return (<></>);

  return (
    <div className="media bg-light p-3 p-md-4 mb-4 shadow rounded">
      <img
        className="mr-3 book__post-image"
        src={book.coverPhoto.localFile.publicURL}
        alt={book.title}
      />
      <div className="media-body">
        <h4 className="mt-0 mb-2 book__post-title">{book.title}</h4>
        <p className="book__post-description">{book.description}</p>
        <a
          className="btn btn-sm btn-warning mr-3"
          href={book.link}
          target="_blank"
          rel="noreferrer nofollow"
        ><FaAmazon /> Comprar</a>
      </div>
    </div>
  );
}

export default BookPost;