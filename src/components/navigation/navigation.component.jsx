import React from "react";

import { Link } from "react-router-dom";
import "./navigation.styles.scss";

class Navigation extends React.Component {
  renderContent() {
    return (
      <div>
        <ul className="site-nav">
          <li className="site-link">Categories</li>
          <li className="site-link">Components</li>
          <li className="site-link">Desktop Computers</li>
          <li className="site-link">Notebooks</li>
          <li className="site-link">Gaming</li>
          <li className="site-link">Monitors</li>
          <li className="site-link">Peripherals</li>
          <li className="site-link">Specials</li>
        </ul>
      </div>
    );
  }

  render() {
    return <div className="navi-container">{this.renderContent()}</div>;
  }
}

export default Navigation;
