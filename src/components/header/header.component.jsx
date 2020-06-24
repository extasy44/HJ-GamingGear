import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import SearchBar from "../searchbar/searchbar.component";
import CartButton from "../cart-button/cartbutton.component";

const Header = ({ hidden }) => {
  return (
    <div>
      <div className="main-header">
        <div className="logo-container">
          <Link to="/">
            <img
              src={require("../../assets/ss_logo.png")}
              alt="Company Logo here"
            />
          </Link>
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="options">
          <CartButton />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});
export default connect(mapStateToProps)(Header);
