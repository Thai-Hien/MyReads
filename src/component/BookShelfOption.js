import React from "react";
import BookItem from "./BookItem";

function BookShelfOption(props) {
  const { shelves, books, changeStatusBook } = props;
  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            <div key={shelf} className="bookshelf">
              <h2 className="bookshelf-title">{shelf}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(
                    book =>
                      book.shelf ===
                      shelf
                      && (
                        <li key={book.title}>
                          <BookItem book={book} changeStatusBook={changeStatusBook} shelf={shelf} />
                        </li>
                      )
                  )}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookShelfOption;
