import React from 'react';
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = props => {
  const { shelf, books, changeShelf } = props;
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.shelf.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksOnThisShelf.map(book => (
                <Book key={book.id}
                      book={book}
                      shelf={shelf.key}
                      changeShelf={changeShelf} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
};

BookShelf.propTypes = {
  shelf: PropTypes.object,
  book: PropTypes.object,
  changeShelf: PropTypes.func,
};

export default BookShelf