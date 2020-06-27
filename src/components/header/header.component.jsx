import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import SearchBar from "../searchbar/searchbar.component";
import CartButton from "../cart-button/cartbutton.component";
import Navigation from "../navigation/navigation.component";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      headerClass: "header-top",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < 200) {
      this.setState({ headerClass: "header-top" });
    } else {
      this.setState({ headerClass: "header-top compressed" });
    }
  };

  render() {
    return (
      <div className="header-wrapper">
        <div className={this.state.headerClass}>
          <div className="main-header">
            <div className="logo-container">
              <Link to="/">
                <img
                  src={require("../../assets/ss_logo.png")}
                  alt="Company Logo here"
                />
              </Link>
            </div>
            <div className="search-container">
              <SearchBar />
            </div>
            <div className="options">
              <CartButton />
            </div>
          </div>
          <Navigation />
        </div>
        <div className="header-placeholder"></div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});
export default connect(mapStateToProps)(Header);
