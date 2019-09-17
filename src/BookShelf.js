import React from 'react'
import Book from "./Book";

const BookShelf = props => {
  const { shelf, books, changeShelf } = props;
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  console.log(props.shelf.name)
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.shelf.name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksOnThisShelf.map(book => (
                <Book key={book.id} book={book} shelf={shelf.key} changeShelf={changeShelf} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf