import React, {Component} from 'react'

class SearchBooksInput extends Component {
  state = {
    query: ''
  };
  
  onQueryUpdate = event => {
    const value = event.target.value;
    this.setState({ query: value }, () => {
      this.props.onSearch(value);
    });
  };
  
  render() {
    return (
      <div className="search-books-input-wrapper">
        <input type="text"
               value={this.state.query}
               onChange={this.onQueryUpdate}
               placeholder="Search by title or author" />
      </div>
    )
  }
}

export default SearchBooksInput