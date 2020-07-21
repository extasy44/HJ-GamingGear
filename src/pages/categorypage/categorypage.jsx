import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as _ from "lodash";

import { selectCategorySections } from "../../redux/categories/categories.selector";
import { selectCategoryProducts } from "../../redux/products/products.selectors";
import { fetchCategoryProducts } from "../../redux/products/products.actions";

import CategoryProductList from "../../components/category-product-list/category-product-list.component";
import QuickSearch from "../../components/quick-search/quick-search.component";
import { Spinner } from "../../components/with-spinner/with-spinner.component";
import CategorySort from "../../components/category-sort/category-sort.component";

import "./categorypage.styles.scss";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOption: "name",
      products: [],
      category: {},
      searchField: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setInitialState();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        isLoading: true,
      });
      this.setInitialState();
    }
  }

  setInitialState = () => {
    window.scrollTo(0, 0);
    const categoryID = this.props.match.params.id;
    this.props.fetchCategoryProducts(categoryID);

    setTimeout(() => {
      const currentCategory = this.props.categories.filter(
        (category) => category.id === Number(categoryID)
      );

      this.setState({
        products: this.props.categoryProducts,
        category: currentCategory[0],
        isLoading: false,
      });
    }, 500);
  };

  sortProducts = (key) =>
    this.setState({
      products: _.sortBy(this.state.products, key),
    });

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

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
    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <div ref={this.myref} className="category-list-wrapper">
        <h1 className="category-title">{this.state.category.title}</h1>
        <p className="category-description">
          {this.state.category.description}
        </p>
        <div className="categry-toolbar">
          <CategorySort updateSortOption={this.sortProducts} />
          <QuickSearch handleChange={this.handleChange} />
        </div>
        <div className="category-grid-view">{this.renderProducts()}</div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategorySections,
  categoryProducts: selectCategoryProducts,
});

export default connect(mapStateToProps, { fetchCategoryProducts })(
  CategoryPage
);
