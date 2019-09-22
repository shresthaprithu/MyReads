import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
  state = {
    books:[],
    searchBooks: []
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
  
  searchBooksResult = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({
            searchBooks: []
          })
        } else {
          this.setState({
            searchBooks: books
          })
        }
      })
    } else {
      this.setState({
        searchBooks: []
      })
    }
  };
  
  searchReset = query => {
      this.setState({
        searchBooks: []
      })
  };
  
  render() {
    const { books, searchBooks } = this.state;
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
            searchBooks={searchBooks}
            changeShelf={this.changeShelf}
            onSearch={this.searchBooksResult}
            onReset={this.searchReset}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp