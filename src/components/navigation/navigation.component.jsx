import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCategorySections } from "../../redux/categories/categories.selector";
import "./navigation.styles.scss";

const Navigation = ({ categories }) => {
  return (
    <div className="navi-container">
      <div>
        <ul className="site-nav">
          {categories.map(({ title, url, id }) => {
            let path = `/category/${id}/${url}`;
            return (
              <li key={id} className="site-link">
                <Link key={id} to={path}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategorySections,
});

export default connect(mapStateToProps)(Navigation);
