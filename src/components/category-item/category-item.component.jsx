import React from "react";
import { withRouter } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ title, imageURL, history, id, url, match }) => {
  return (
    <div
      className="category-item"
      onClick={() => history.push(`${match.url}category/${id}/${url}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="content">
        <h2>{title}</h2>
        <span>View More</span>
      </div>
    </div>
  );
};

export default withRouter(CategoryItem);
