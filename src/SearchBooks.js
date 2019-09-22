import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';
import SearchResults from './SearchResults';
import PropTypes from "prop-types";

class SearchBooks extends Component{
  render() {
    const {
      books,
      onSearch,
      onReset,
      changeShelf,
      searchBooks,
      hasError } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button onClick={onReset}
                    className={'close-search'}>Add a Book</button>
          </Link>
          <SearchBooksInput onSearch={onSearch} onReset={onReset}/>
        </div>
        <SearchResults
          books={books}
          searchBooks={searchBooks}
          changeShelf={changeShelf}
          hasError={hasError}
        />
        {
          hasError
              ? <div style={{textAlign: 'center'}}>Nothing to display. Please try again.</div>
              : null
        }
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
  hasError: PropTypes.bool
};

export default SearchBooks