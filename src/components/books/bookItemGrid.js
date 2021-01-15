import React from "react"
import { FaAmazon } from "react-icons/all"
import { Card } from "react-bootstrap"

const BookItemGrid = ({book}) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <img src={book.node.coverPhoto.localFile.publicURL} width={100}/>
        <Card.Title style={{fontSize: 22}} className="mt-3">
          {book.node.title}
        </Card.Title>
        <Card.Text style={{fontSize: 16}} className="mt-2">
          {book.node.description}
        </Card.Text>
        <a
          className="btn btn-warning"
          href={book.node.link}
          rel="noreferrer nofollow"
          target="_blank"
        ><FaAmazon/> Comprar</a>
      </Card.Body>
    </Card>
  );
}

export default BookItemGrid;