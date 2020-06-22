import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./category-product-list.styles.scss";

const CategoryProductList = ({ id, product, addItem }) => {
  const { ImageURL, name, partnumber, stock, url, price } = product;
  const productLink = `/products/${id}/${url}`;
  return (
    <div className="product-container">
      <Link to={productLink} style={{ textDecoration: "none" }}>
        <div className="product-wrapper">
          <div
            className="category-product-image"
            style={{
              background: `url(${ImageURL}) no-repeat`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
            }}
          >
            <div className="in-stock">{stock}</div>
          </div>

          <div className="product-info">
            <div className="name">{name}</div>
            <div className="partnumber">{partnumber}</div>

            <div className="price">{price}</div>
          </div>
        </div>
      </Link>
      <CustomButton className="custom-button" onClick={() => addItem(product)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CategoryProductList);
