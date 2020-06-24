import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleFill } from "react-bootstrap-icons";

import "./star.styles.scss";

const Star = ({ top, left, linkUrl }) => {
  return (
    <div className="starOuterContainer">
      <div
        className="starContainer"
        style={{ top: `${top}%`, left: `${left}%` }}
      >
        <div className="starItem">
          <Link to={linkUrl}>
            <PlusCircleFill color="red" size={26} />
          </Link>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Star;
