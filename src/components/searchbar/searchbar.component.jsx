import React from "react";

import "./searchbar.styles.scss";
import { Search } from "react-bootstrap-icons";

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search-form">
        <input className="search-input" placeholder="Search.." type="search" />

        <button className="search-button" type="submit">
          <Search size={30} />
        </button>
      </form>
    );
  }
}

export default SearchBar;
