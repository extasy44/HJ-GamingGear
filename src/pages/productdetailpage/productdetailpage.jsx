import React from "react";
import { withRouter } from "react-router-dom";

import ProductsData from "../../data/products.data";
import "./productdetailpage.styles.scss";
import ProductDetails from "../../components/product-details/product-details.component";

class ProductDetailPage extends React.Component {
  state = {
    currentlyViewingProduct: null,
    loading: true,
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const productId = this.props.match.params.id;
    const currentProduct = ProductsData.find(
      (item) => item.id === Number(productId)
    );
    this.setState({
      currentlyViewingProduct: currentProduct,
      loading: false,
    });
  };

  renderContent() {
    const product = this.state.currentlyViewingProduct;
    return <ProductDetails {...product} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default withRouter(ProductDetailPage);
