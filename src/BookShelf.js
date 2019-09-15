import React from 'react'
import ListBook from "./ListBook";

function BookShelf(props) {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <ListBook/>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf