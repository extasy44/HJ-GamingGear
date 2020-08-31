import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./cartpage.styles.scss";

import CheckoutProduct from "../../components/checkout-product/checkout-product.component";

const CartPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    {cartItems.length !== 0 ? (
      <>
        <div className="checkout-header">
          <div className="header-block"></div>
          <div className="header-product">
            <span>Product</span>
          </div>
          <div className="header-qty">
            <span>Qty</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((cartItem) => (
          <CheckoutProduct key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total"> Total : ${total} </div>
      </>
    ) : (
      <h2>You have no item in cart</h2>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartPage);
