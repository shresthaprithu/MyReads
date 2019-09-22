import React from 'react'
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

const BookShelves = props => {
  const { bookshelves, books, changeShelf } = props;
  console.log('bookshelves', bookshelves)
  return (
    <div className="list-books-content">
      <div>
        {bookshelves.map(shelf => (
          <BookShelf key={shelf.key} shelf={shelf} books={books} changeShelf={changeShelf} />
        ))}
      </div>
    </div>
  );
}

BookShelves.propTypes = {
  bookshelves: PropTypes.array,
  books: PropTypes.array,
  changeShelf: PropTypes.func,
}

export default BookShelves