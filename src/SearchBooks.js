import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchBooksInput from './SearchBooksInput'
import SearchResults from './SearchResults'
import PropTypes from "prop-types";

class SearchBooks extends Component{
  render() {
    const { books, onSearch, onReset, changeShelf, searchBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button onClick={onReset} className={'close-search'}>Add a Book</button>
          </Link>
          <SearchBooksInput onSearch={onSearch} onReset={onReset}/>
        </div>
        <SearchResults
          books={books}
          searchBooks={searchBooks}
          changeShelf={changeShelf}
        />
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array,
  searchBooks: PropTypes.array,
  onSearch: PropTypes.func,
  onReset: PropTypes.func,
  changeShelf: PropTypes.func,
}


export default SearchBooks