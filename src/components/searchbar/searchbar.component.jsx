import React from "react";

import "./searchbar.styles.scss";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search-form">
        <input
          className="search-input"
          placeholder="Search Here.."
          type="search"
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
