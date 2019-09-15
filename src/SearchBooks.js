import React from 'react'
import SearchBooksInput from './SearchBooksInput'
import SearchResults from './SearchResults'

function SearchBooks(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</button>
        <SearchBooksInput/>
      </div>
      <SearchResults/>
    </div>
  )
}

export default SearchBooks