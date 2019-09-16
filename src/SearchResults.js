import React from 'react'
import Book from "./Book";

const SearchResults = props => {
  const { books } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => (
          <Book key={book.id} book={book} shelf="none" />
        ))}
      </ol>
    </div>
  )
}

export default SearchResults