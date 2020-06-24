import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./checkout-product.styles.scss";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutProduct = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, ImageURL, price, quantity, partnumber, url, id } = cartItem;
  const productUrl = `/products/${id}/${url}`;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={ImageURL} />
      </div>
      <Link className="name" to={productUrl}>
        <span>
          {name}
          <br />
          <span className="part">{partnumber}</span>
          <div className="price">${price}</div>
        </span>
      </Link>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
