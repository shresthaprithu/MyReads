import React from 'react';

const SearchBooksInput = props => {
  return (
    <div className="search-books-input-wrapper">
      <input type="text"
             value={props.query}
             onChange={props.onQueryUpdate}
             placeholder="Search by title or author" />
    </div>
  )
};

export default SearchBooksInput