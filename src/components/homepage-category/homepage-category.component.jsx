import React from "react";

import "./homepage-category.styles.scss";
import SHOP_DATA from "../../data/shop.data";

import CategoryItem from "../category-item/category-item.component";

class HomepageCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SHOP_DATA.sections,
    };
  }

  render() {
    console.log(this.state.sections);
    return (
      <div className="category-menu">
        {this.state.sections.map(({ id, ...otherSecrionProps }) => (
          <CategoryItem key={id} id={id} {...otherSecrionProps} />
        ))}
      </div>
    );
  }
}

export default HomepageCategory;
