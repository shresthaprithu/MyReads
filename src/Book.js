import React from 'react'
import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
  const { book, shelf, changeShelf } = props;
  // console.log('book.imageLinks.thumbnail', book.imageLinks)
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
          style =
            {
              {
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`,
              }
            }
          />
          <BookShelfChanger book={book} shelf={shelf} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(' and ')}</div>
      </div>
    </li>
  )
}

export default Book