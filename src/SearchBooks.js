import React from 'react'
import SearchBooksInput from './SearchBooksInput'

function SearchBooks(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</button>
        <SearchBooksInput/>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

export default SearchBooks