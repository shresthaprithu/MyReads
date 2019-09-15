import React from 'react'
import BookShelf from "./BookShelf";

const BookShelves = props => {
  const { bookshelves, books } = props;
  return (
    <div className="list-books-content">
      <div>
        {bookshelves.map(shelf => (
          <BookShelf key={shelf.key} shelf={shelf} books={books} />
        ))}
      </div>
    </div>
  );
}

export default BookShelves