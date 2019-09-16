import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchBooksInput from './SearchBooksInput'
import SearchResults from './SearchResults'

class SearchBooks extends Component{
  render() {
    const { books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className={'close-search'}>Add a Book</button>
          </Link>
          <SearchBooksInput/>
        </div>
        <SearchResults books={books}/>
      </div>
    )
  }
}

export default SearchBooks