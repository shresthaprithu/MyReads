import React from 'react'
import Book from "./Book";

const SearchResults = props => {
  const { books, searchBooks, changeShelf } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            changeShelf ={changeShelf}
            shelf={book.shelf ? book.shelf : 'none'} />
        ))}
      </ol>
    </div>
  )
}

export default SearchResults