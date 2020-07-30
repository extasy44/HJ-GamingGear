import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cartbutton.styles.scss";
import { Cart } from "react-bootstrap-icons";

import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CartButton = ({ cartItemCount, totalAmount }) => {
  return (
    <Link to="/checkout/">
      <div className="header-cart-wrapper">
        <div className="cart-button">
          <div className="cart-count">
            {!cartItemCount ? 0 : cartItemCount} Item(s) || $
            {totalAmount === 0 ? 0 : totalAmount}
          </div>
          <div className="cart-link">View Cart / Checkout</div>
        </div>
        <Cart
          className="cart-icon"
          color="black"
          size={35}
          data-count={cartItemCount}
        >
          {cartItemCount}
        </Cart>
      </div>
    </Link>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount,
  totalAmount: selectCartTotal,
});

export default connect(mapStateToProps)(CartButton);
