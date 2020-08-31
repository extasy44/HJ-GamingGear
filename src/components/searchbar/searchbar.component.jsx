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
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectProducts, history } = this.props;

    if (this.state.keyword.length > 2) {
      selectProducts(this.state.keyword);
      history.push(`/search/${this.state.keyword}`);
      this.setState({
        keyword: "",
      });
    } else {
      alert("Please provide more than 2 characters");
      this.setState({
        message: "Please provide more than 2 characters",
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
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
