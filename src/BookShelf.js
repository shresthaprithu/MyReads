import React from 'react'
import Book from "./Book";

function BookShelf(props) {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book/>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf