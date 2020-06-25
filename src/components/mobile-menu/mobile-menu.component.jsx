import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCategorySections } from "../../redux/categories/categories.selector";
import { toggleMenu } from "../../redux/menu/menu.actions";
import { selectMenuOpen } from "../../redux/menu/menu.selectors";

import "./mobile-menu.styles.scss";

const MobileMenu = ({ open, categories, dispatch }) => {
  let toggle = {
    transform: (open = open ? "translateX(0)" : "translateX(-100%)"),
  };

  return (
    <div className="mobile-menu" style={toggle}>
      <div className="mobile-menu-close" onClick={() => dispatch(toggleMenu())}>
        Close
      </div>

      <ul className="site-nav">
        <div className="mobile-menu-title">MENU</div>
        {categories.map(({ title, url, id }) => {
          let path = `/category/${id}/${url}`;
          return (
            <Link key={id} to={path} onClick={() => dispatch(toggleMenu())}>
              <li key={id} className="site-link">
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategorySections,
  menuOpen: selectMenuOpen,
});

export default connect(mapStateToProps)(MobileMenu);
