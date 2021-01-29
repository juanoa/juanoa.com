import React from "react"
import { FaAmazon } from "react-icons/all"
import { Card } from "react-bootstrap"

const BookItemGrid = ({book}) => {
  const cover = book.node.coverPhoto.localFile.publicURL;
  const title = book.node.title;
  const description = book.node.description || "Simplemente te lo recomiendo :)";
  const link = book.node.link;

  return (
    <Card className="border-0 bg-light shadow-sm mt-2 book__card-item">
      <Card.Body className="text-center">
        <img
          alt={title}
          src={cover}
          width={100}
        />
        <Card.Title className="book__title mt-3">
          {title}
        </Card.Title>
        <Card.Text className="book__description mt-2">
          {description}
        </Card.Text>
        <a
          className="btn btn-warning"
          href={link}
          rel="noreferrer nofollow"
          target="_blank"
        ><FaAmazon/> Comprar</a>
      </Card.Body>
    </Card>
  );
}

export default BookItemGrid;