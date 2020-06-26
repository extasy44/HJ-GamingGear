import React from "react";

import "./searchbar.styles.scss";
import { Search } from "react-bootstrap-icons";

class SearchBar extends React.Component {
  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit.bind(this)}>
        <input
          className="search-input"
          placeholder="SEARCH ENTIRE STORE NOT READY"
          disabled
          type="search"
        />

        <button className="search-button" type="submit">
          <Search size={30} />
        </button>
      </form>
    );
  }
}

export default SearchBar;
