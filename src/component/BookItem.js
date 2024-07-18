import React, { Component } from "react";
import { Link } from "react-router-dom";
import StatusRead from "./StatusRead";

class BookItem extends Component {
  render() {
    const { book, changeStatusBook, shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <Link to={{ pathname: "/book", search: `?id=${book.id}` }}>
            <div
              className="book-cover"
              style={{
                height: 190,
                width: 120,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
              }}
            />
          </Link>
          <div className="book-shelf-changer">
            <StatusRead changeStatusBook={changeStatusBook} book={book} shelf={shelf} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default BookItem;
