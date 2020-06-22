import React from "react";
import { withRouter } from "react-router-dom";

import ProductsData from "../../data/products.data";
import "./productdetailpage.styles.scss";
import ProductDetails from "../../components/product-details/product-details.component";

class ProductDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyViewingProduct: null,
    };
  }

  componentDidMount = () => {
    const productId = this.props.match.params.id;
    const currentProduct = ProductsData.find(
      (item) => item.id === Number(productId)
    );

    this.setState({ currentlyViewingProduct: currentProduct });
  };

  renderContent() {
    const product = this.state.currentlyViewingProduct;

    return (
      <div>
        <ProductDetails {...product} />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default withRouter(ProductDetailPage);
