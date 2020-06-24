import React from "react";
import "./with-spinner.styles.scss";

const Spinner = () => (
  <div className="overray">
    <div className="spinner-container"></div>
  </div>
);

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
