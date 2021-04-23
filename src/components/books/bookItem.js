import React from "react"
import { FaAmazon, FaStar } from "react-icons/all";

const BookItem = ({book}) => {
  const cover = book.node.coverPhoto.url;
  const {title, link, author, description, recommended} = book.node;

  return (
    <div className="card book__card-item border-0 bg-light shadow-sm mt-2">
      <div className="card-body text-center">
        {
          recommended &&
          <span className="book__recommended-badge"><FaStar /></span>
        }
        <img
          alt={title}
          src={cover}
          width={100}
        />
        <div className="card-title book__title h5 mt-3">
          {title}
        </div>
        {
          author &&
          <div className="book__author">{author}</div>
        }
        <p className="book__description mt-2 card-text">
          {description}
        </p>
        <a
          className="btn btn-warning"
          href={link}
          rel="noreferrer nofollow"
          target="_blank"
        ><FaAmazon/> Comprar</a>
      </div>
    </div>
  );
}

export default BookItem;