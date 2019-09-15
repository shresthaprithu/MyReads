import React from 'react'
import {Link} from 'react-router-dom'
import SearchBooksInput from './SearchBooksInput'
import SearchResults from './SearchResults'

function SearchBooks(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className={'close-search'}>Add a Book</button>
        </Link>
        <SearchBooksInput/>
      </div>
      <SearchResults/>
    </div>
  )
}

export default SearchBooks