import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StatusRead from "./StatusRead";

const BookItem = ({ book, changeStatusBook, shelf }) => {
  const imageUrl = book.imageLinks && book.imageLinks.smallThumbnail
    ? `url(${book.imageLinks.smallThumbnail})`
    : "";
  const authors = book.authors ? book.authors.join(", ") : "";

  return (
    <div className="book">
      <div className="book-top">
        <Link to={{ pathname: "/book", search: `?id=${book.id}` }}>
          <div
            className="book-cover"
            style={{
              height: 190,
              width: 120,
              backgroundImage: imageUrl
            }}
          />
        </Link>
        <div className="book-shelf-changer">
          <StatusRead changeStatusBook={changeStatusBook} book={book} shelf={shelf} />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string
    })
  }).isRequired,
  changeStatusBook: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
};

export default BookItem;
