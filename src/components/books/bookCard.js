import React from "react"
import { FaAmazon } from "react-icons/all";

const BookCard = ({book, lang}) => {

  if (!book) return (<></>);

  const cover = book.coverPhoto.url;
  const {title, description, link, author} = book;

  return (
    <div className="media bg-light p-3 p-md-4 mb-4 shadow rounded">
      <img
        className="mr-3 book__post-image"
        src={cover}
        alt={title}
      />
      <div className="media-body">
        <h4 className="mt-0 mb-0 book__post-title">
          {title}
        </h4>
        {
          author &&
          <div className="mt-0 mb-2 book__post-author">
            {author}
          </div>
        }
        <p className="book__post-description">{description}</p>
        <a
          className="btn btn-sm btn-warning mr-3"
          href={link}
          target="_blank"
          rel="noreferrer nofollow"
        ><FaAmazon /> {(lang === "es") ? "Comprar" : "Buy it"}</a>
      </div>
    </div>
  );
}

export default BookCard;