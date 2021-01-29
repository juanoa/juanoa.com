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
    // <Card className="shadow-sm mb-4">
    //   <Card.Header><span role="img" aria-label="Libro">📘</span> Libro relacionado</Card.Header>
    //   <Card.Body>
    //     <Row>
    //       <Col xs={4} md={3} style={{textAlign: 'center'}}>
    //         <img
    //           src={book.coverPhoto.localFile.publicURL}
    //           alt={book.title}
    //         />
    //       </Col>
    //       <Col xs={8} md={9}>
    //         <h3>{book.title}</h3>
    //         <p
    //           style={{
    //             fontSize: 14,
    //             textAlign: 'left'
    //           }}
    //           className="mt-1"
    //         >{book.description}</p>
    //         <a
    //           className="btn btn-warning"
    //           href={book.link}
    //           rel="noreferrer nofollow"
    //           target="_blank"
    //         > <FaAmazon/> Comprar</a>
    //       </Col>
    //     </Row>
    //   </Card.Body>
    // </Card>
  );
}

export default BookPost;