import React, { useState, useEffect, useCallback } from "react";
import { Link, Route } from "react-router-dom";
import BookShelfOption from "./component/BookShelfOption";
import BookSearchList from "./component/BookSearchList";
import "./App.css";
import * as BooksAPI from "./service/BooksAPI";

const MyreadApp = () => {
  const [shelves] = useState(["currentlyReading", "wantToRead", "read"]);
  const [books, setBooks] = useState([]);
  const [bookError, setBookError] = useState(false);
  const [listBookDefault, setListBookDefault] = useState(new Map());

  const listBooksDefault = useCallback((books) => {
    let newMap = new Map();
    console.log(books);
    books.forEach((book) => {
      newMap.set(book.id, book.shelf);
    });
    setListBookDefault(newMap);
  }, []);

  useEffect(() => {
    if (books.length === 0) {
      BooksAPI.getAll().then((books) => {
        listBooksDefault(books);
        setBooks(books);
      });
    }
  }, [books.length, listBooksDefault]);

  const changeStatusBook = useCallback((bookToAdd, shelfName) => {
    console.log(shelfName);
    console.log(bookToAdd);
    BooksAPI.update(bookToAdd, shelfName).then(() => {
      bookToAdd.shelf = shelfName;
      let bookAdded = false;
      setBooks((prevBooks) => {
        const updatedBooks = prevBooks.map((book) => {
          if (book.id === bookToAdd.id) {
            if (book.shelf !== shelfName) {
              setBookError(true);
              return { ...book, shelf: shelfName };
            }
            bookAdded = true;
          }
          return book;
        });
        if (!bookAdded) {
          setListBookDefault((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(bookToAdd.id, shelfName);
            return newMap;
          });
          return [...updatedBooks, bookToAdd];
        }
        return updatedBooks;
      });
    }).catch(() => {
      setBookError(true);
    });
  }, []);

  const handleEror = useCallback(() => {
    setBookError(false);
  }, []);

  return (
    <div className="app">
      <div className="list-books">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelfOption
              changeStatusBook={changeStatusBook}
              shelves={shelves}
              books={books}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearchList
              changeStatusBook={changeStatusBook}
              bookError={bookError}
              handleEror={handleEror}
              books={books}
              listBookDefault={listBookDefault}
            />
          )}
        />
        <div className="open-search">
          <Link to={{ pathname: "/search" }}> Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default MyreadApp;
