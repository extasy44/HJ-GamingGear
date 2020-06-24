import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./mobile-header.styles.scss";
import { List } from "react-bootstrap-icons";

import { selectMenuOpen } from "../../redux/menu/menu.selectors";
import { toggleMenu } from "../../redux/menu/menu.actions";

import SearchBar from "../searchbar/searchbar.component";
import CartButton from "../cart-button/cartbutton.component";
import MobileMenu from "../mobile-menu/mobile-menu.component";

const MobileHeader = ({ menuOpen, toggleMenu }) => {
  return (
    <div>
      <MobileMenu open={menuOpen} />
      <div className="mobile-header">
        <div className="mobile-header-row1">
          <div className="mobile-nav" onClick={() => toggleMenu()}>
            <List color={!menuOpen ? "white" : "black"} size={40} />
          </div>
          <div className="logo-container">
            <Link to="/">
              <img
                src={require("../../assets/ss_logo.png")}
                alt="Company Logo here"
              />
            </Link>
          </div>
          <div className="options">
            <CartButton />
          </div>
        </div>

        <div className="search-container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuOpen: selectMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
