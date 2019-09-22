import React, {Component} from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
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

ListBooks.propTypes = {
  bookshelves: PropTypes.array,
  books: PropTypes.array,
  changeShelf: PropTypes.func,
}

export default ListBooks