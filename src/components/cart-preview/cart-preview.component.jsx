import React from "react";

import "./cart-preview.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartPreview = () => {
  return (
    <div className="cart-preview">
      <div className="cart-items">
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartPreview;
