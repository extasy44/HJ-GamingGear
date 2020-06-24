import React from "react";

import "./quick-search.styles.scss";

export const QuickSearch = ({ handleChange }) => (
  <input
    className="quick-search"
    type="search"
    placeholder="Quick Search.."
    onChange={handleChange}
  />
);

export default QuickSearch;
