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
    // console.log(BooksAPI.getAll())
  }
  
  changeShelf = (book, shelf) => {
    const updateShelf = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    });
    
    this.setState({
      books: updateShelf,
    });
    BooksAPI.update(book, shelf);
    /*BooksAPI.update(book, shelf).then(books => (
      console.log(books)
    ))*/
  };


render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              bookshelves={this.bookshelves}
              books={books}
              changeShelf={this.changeShelf}
            />
          )} />
        <Route path="/search" render={() => (
          <SearchBooks
            books={books}
            changeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
