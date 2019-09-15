import React from 'react'
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelf/>
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  )
}

export default ListBooks