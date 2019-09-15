import React from 'react'
import Book from "./Book";

const BookShelf = props => {
  const { shelf, books } = props;
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksOnThisShelf.map(book => (
                <Book key={book.id} book={book} shelf={shelf.key} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf