import React from 'react'
import Book from "./Book";

const SearchResults = props => {
  const {searchBooks, books, changeShelf } = props;
  const booksAlreadyOnShelf = searchBooks.map(book => {
    books.map(b => {
      if(b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b
    })
    return book;
  })
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {booksAlreadyOnShelf.map(book => (
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