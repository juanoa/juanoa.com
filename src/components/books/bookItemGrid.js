import React from "react"
import { FaAmazon } from "react-icons/all"

const BookItemGrid = ({book}) => {
  const cover = book.node.coverPhoto.url;
  const title = book.node.title;
  const description = book.node.description || "Simplemente te lo recomiendo :)";
  const link = book.node.link;

  return (
    <div className="card book__card-item border-0 bg-light shadow-sm mt-2">
      <div className="card-body text-center">
        <img
          alt={title}
          src={cover}
          width={100}
        />
        <div className="card-title book__title h5 mt-3">
          {title}
        </div>
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

export default BookItemGrid;