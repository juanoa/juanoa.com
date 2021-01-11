import { Card, Col, Row } from "react-bootstrap"
import React from "react"
import { FaAmazon } from "react-icons/all"

const BookPost = ({book}) => {

  if (!book) return (<></>);

  return (
    <Card className="shadow-sm mb-4">
      <Card.Header><span role="img" aria-label="Libro">📘</span> Libro relacionado</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={4} md={3} style={{textAlign: 'center'}}>
            {/*<img*/}
            {/*  src={book.coverPhoto.publicURL}*/}
            {/*  alt={book.title}/>*/}
          </Col>
          <Col xs={8} md={9}>
            <h3>{book.title}</h3>
            <p
              style={{
                fontSize: 14,
                textAlign: 'left'
              }}
              className="mt-1"
            >{book.description}</p>
            <a
              className="btn btn-warning"
              href={book.link}
              rel="noreferrer nofollow"
              target="_blank"
            > <FaAmazon/> Comprar</a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default BookPost;