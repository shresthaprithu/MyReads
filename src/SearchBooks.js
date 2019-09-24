import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';
import SearchResults from './SearchResults';
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component{
  
  state = {
    query: '',
    searchBooks:[],
    error: false
  };
  
  onQueryUpdate = event => {
    const value = event.target.value;
    this.setState({ query: value }, () => {
      this.searchBooksResult(value);
    });
  };
  
  searchBooksResult = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({
            searchBooks: [],
            error: true,
          })
        } else if(query === this.state.query) {
          this.setState({
            searchBooks: books,
            error: false,
          })
        }
      })
    } else {
      this.setState({
        searchBooks: []
      })
    }
  };
  
  searchReset = () => {
    this.setState({
      searchBooks: []
    })
  };
  
  render() {
    const {
      onReset,
      changeShelf,
    } = this.props;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button onClick={onReset}
                    className={'close-search'}>Add a Book</button>
          </Link>
          <SearchBooksInput  onReset={onReset} onQueryUpdate={this.onQueryUpdate}/>
        </div>
        <SearchResults
          books={this.props.books}
          searchBooks={this.state.searchBooks}
          changeShelf={changeShelf}
        />
        {
          this.state.error
            ? <div style={{textAlign: 'center'}}>Nothing to display. Please try again.</div>
            : null
        }
      </div>
    )
  }
}

SearchBooks.propTypes = {
  onReset: PropTypes.func,
  changeShelf: PropTypes.func
};

export default SearchBooks