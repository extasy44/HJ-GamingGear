import React from "react";
import { useHistory } from "react-router-dom";

import "./error-page.styles.scss";

const ErrorPage = () => {
  const history = useHistory();

  const navigateToHomePage = () => {
    history.push("/");
  };

  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong</p>
      <div className="error-link" onClick={() => navigateToHomePage()}>
        <i className="icon-home" /> Go back to home page
      </div>
    </div>
  );
};

export default ErrorPage;
