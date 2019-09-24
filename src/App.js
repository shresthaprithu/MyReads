import React from 'react';
import {Switch , Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
  state = {
    books:[],
  };
  
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
  };
  
  changeShelf = (book, shelf) => {
    const updateShelf = this.state.books.filter(b => {
      return b.id === book.id;
    });

    this.setState({
      books: updateShelf,
    });

    // reflect added books to new shelf from search
    let newBooks = [];
    newBooks = this.state.books.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      newBooks = newBooks.concat(book);
    }

    this.setState({
      books: newBooks,
    });
  };
  
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            exact path="/" render={() => (
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
        </Switch>
      </div>
    )
  }
}

export default BooksApp