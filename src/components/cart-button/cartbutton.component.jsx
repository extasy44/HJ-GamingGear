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
import { clearCart } from "../../redux/cart/cart.actions";

const CartButton = ({ cartItemCount, totalAmount, clearCart }) => {
  return (
    <div className="header-cart-wrapper">
      <Link to="/checkout/">
        <div className="cart-button">
          <div className="cart-count">
            {!cartItemCount ? 0 : cartItemCount} Item(s) || $
            {totalAmount === 0 ? 0 : totalAmount}
          </div>
          <div className="cart-link">View Cart / Checkout</div>
        </div>
      </Link>
      <Cart className="cart-icon" onClick={clearCart} color="black" size={35} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemCount: selectCartItemsCount,
  totalAmount: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
