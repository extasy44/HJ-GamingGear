import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./product-details.styles.scss";

const ProductDetails = ({
  id,
  ImageURL,
  category,
  name,
  sku,
  price,
  stock,
  description,
  partnumber,
  addItem,
}) => {
  const product = {
    ImageURL,
    category,
    id,
    name,
    sku,
    price,
    stock,
    partnumber,
  };
  return (
    <div className="product-details-wrapper">
      <div className="image-wrapper">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${ImageURL})` }}
        ></div>
      </div>
      <div className="product-info">
        <h1 className="product-name">{name}</h1>
        <div className="product-partnumber">Part No : {partnumber}</div>
        <div className="product-price">${price}</div>
        <div className="product-stock">
          Availiablility : <span>{stock}</span>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          {description}
        </div>
        <CustomButton
          className="custom-button add-button"
          onClick={() => addItem(product)}
        >
          ADD TO CART
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductDetails);
