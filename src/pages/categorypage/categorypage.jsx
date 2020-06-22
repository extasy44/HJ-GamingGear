import React from "react";

import ProductsData from "../../data/products.data";

import CategoryProductList from "../../components/category-product-list/category-product-list.component";

import "./categorypage.styles.scss";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: ProductsData,
    };
  }

  renderContent() {
    const categoryID = this.props.match.params.id;
    const categoryProducts = this.state.products.filter(
      (product) => product.categoryId === Number(categoryID)
    );

    return categoryProducts.map((product) => {
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
    return <div className="category-grid-view">{this.renderContent()}</div>;
  }
}

export default CategoryPage;
