import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./searchbar.styles.scss";
import { Search } from "react-bootstrap-icons";

import { selectProducts } from "../../redux/products/products.actions";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.selectProducts(this.state.keyword);
    this.props.history.push(`/search/${this.state.keyword}`);
  };

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });

    this.props.selectProducts(this.state.keyword);
    this.props.history.push(`/search/${this.state.keyword}`);
  };

  render() {
    return (
      <>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            placeholder="SEARCH HERE"
            type="search"
            value={this.state.keyword}
            onChange={this.handleChange}
          />

          <button className="search-button" type="submit">
            <Search size={25} />
          </button>
        </form>
      </>
    );
  }
}

export default connect(null, { selectProducts })(withRouter(SearchBar));
