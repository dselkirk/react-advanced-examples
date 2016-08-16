import React from 'react';
import SearchFormContainer from '../containers/search-form-container';

// Using "Stateless Functional Components" https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        {props.title}
        <SearchFormContainer searchType={props.searchType} />
      </header>
      <div className="search-results">
        {props.children}
      </div>
      <footer className="search-footer">
        {props.totalResults} Results
      </footer>
    </div>
    );
}
