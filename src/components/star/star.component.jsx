import React from "react";
import { Link } from "react-router-dom";

import "./star.styles.scss";

const Star = ({ top, left }) => {
  return (
    <div className="starOuterContainer">
      <div
        className="starContainer"
        style={{ top: `${top}%`, left: `${left}%` }}
      >
        <div className="starItem">
          <Link to="/"></Link>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Star;
