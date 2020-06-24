import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategorySections } from "../../redux/categories/categories.selector";

import "./homepage-category.styles.scss";

import CategoryItem from "../category-item/category-item.component";

const HomepageCategory = ({ categories }) => {
  return (
    <div className="category-menu">
      {categories.map(({ id, ...otherCategoryProps }) => (
        <CategoryItem key={id} id={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategorySections,
});

export default connect(mapStateToProps)(HomepageCategory);
