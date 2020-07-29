import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as _ from "lodash";

import { selectCategoryProducts } from "../../redux/products/products.selectors";

import CategoryProductList from "../../components/category-product-list/category-product-list.component";

import { Spinner } from "../../components/with-spinner/with-spinner.component";
import "../categorypage/categorypage.styles.scss";

class SearchResultPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOption: "name",
      products: [],
      searchField: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setInitialState();
  }

  componentDidUpdate() {
    this.setInitialState();
  }

  setInitialState = () => {
    setTimeout(() => {
      this.setState({
        products: this.props.selectedProducts,
        isLoading: false,
      });
    }, 500);
  };

  sortProducts = (key) =>
    this.setState({
      products: _.sortBy(this.state.products, key),
    });

  renderProducts() {
    const { products, searchField } = this.state;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return filteredProducts.map((product) => {
      return (
        <CategoryProductList
          key={product.id}
          id={product.id}
          product={product}
        />
      );
    });
  }

  render() {
    const { isLoading, products } = this.state;

    return isLoading ? (
      <Spinner />
    ) : (
      <div className="category-list-wrapper">
        <h3 className="category-title">{products.length} product(s) found</h3>
        <div className="category-grid-view">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedProducts: selectCategoryProducts,
});

export default connect(mapStateToProps)(SearchResultPage);
