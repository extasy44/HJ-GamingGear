import React from "react";

import "./footer.styles.scss";

class Footer extends React.Component {
  renderContents() {
    return (
      <div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul className="footer-column-item">
            <li>Technical Services</li>
            <li>Returns and Warranty</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customers</h3>
          <ul className="footer-column-item">
            <li>Technical Services</li>
            <li>Returns and Warranty</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul className="footer-column-item">
            <li>Technical Services</li>
            <li>Returns and Warranty</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Store Locations</h3>
          <ul className="footer-column-item">
            <li>Notting Hill</li>
            <li>West Melbourne</li>
            <li>Clayton</li>
            <li>Dandenong South</li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return <div className="footer-container">{this.renderContents()}</div>;
  }
}

export default Footer;
