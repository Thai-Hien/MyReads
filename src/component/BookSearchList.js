import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from "../service/BooksAPI";
import { DebounceInput } from "react-debounce-input";

function BookSearchList(props) {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState(props.books);

  const handleSearch = (keyword) => {
    if (keyword !== "") {
      BooksAPI.search(keyword).then((books) => {
        if (books.hasOwnProperty("error")) {
          setSearchInput("");
        } else {
          setBooks(books);
          setSearchInput(keyword);
        }
      });
    } else {
      setBooks(props.books);
      setSearchInput("");
    }
  };

  useEffect(() => {
    if (searchInput === "") {
      setBooks(props.books);
    }
  }, [props.books, searchInput]);

  const {
    changeStatusBook,
    listBookDefault,
  } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <DebounceInput
            type="text"
            minLength={1}
            debounceTimeout={300}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Input data search"
          />
        </div>
      </div>
      <div className="search-books-results">

        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.title}>
              <BookItem
                book={book}
                changeStatusBook={changeStatusBook}
                shelf={
                  listBookDefault.get(book.id) === undefined
                    ? "none"
                    : listBookDefault.get(book.id)
                }
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookSearchList;
