import React from 'react'
import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
  const { book, shelf, changeShelf } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
                book.imageLinks
                    ? book.imageLinks.thumbnail
                    : 'https://via.placeholder.com/128x193'
            })`}}/>
          <BookShelfChanger book={book} shelf={shelf} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Author is unknown'}</div>
      </div>
    </li>
  )
}

export default Book