import React from 'react'
import BookShelf from "./BookShelf";

const BookShelves = props => {
  const { bookshelves, books, changeShelf } = props;
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

export default BookShelves