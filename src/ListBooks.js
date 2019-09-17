import React, {Component} from 'react'
import {Link} from "react-router-dom";
import BookShelves from "./BookShelves";

class ListBooks extends Component {
  render() {
    const { bookshelves, books, changeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelves bookshelves={bookshelves} books={books} changeShelf={changeShelf}/>
        <div className="open-search">
          <Link to="search">
            <button>Add a Book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks