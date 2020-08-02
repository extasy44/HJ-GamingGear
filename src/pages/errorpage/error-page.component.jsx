import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import "./error-page.styles.scss";

const ErrorPage = () => {
  const history = useHistory();
  const navigateToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="error-page">
      <h3 className="error-header">Page not Found!</h3>
      <div className="error-link" onClick={() => navigateToHomePage()}>
        <i className="icon-home" /> Go back to home page
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  clearState: PropTypes.func,
};

export default ErrorPage;
