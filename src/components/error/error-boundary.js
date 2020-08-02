import React from "react";
import PropTypes from "prop-types";
import ErrorPage from "./error-page.component";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundary;
