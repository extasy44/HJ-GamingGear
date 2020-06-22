import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cartbutton.styles.scss";

const CartButton = ({ toggleCartHidden }) => {
  return (
    <Link to="/checkout/">
      <div className="cart-button" onClick={toggleCartHidden}>
        <div className="cart-count">1 : Item(s)</div>
        <div className="cart-link">View Cart/Checkout</div>
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartButton);
