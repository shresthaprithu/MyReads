import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
  state = {
    books:[]
  }
  
  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Have Read' },
  ];
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
    console.log(BooksAPI.getAll())
  }
  
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks bookshelves={this.bookshelves} books={books} />
          )} />
        <Route path="/search" render={() => (
          <SearchBooks books={books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
