import React from 'react';

const ErrorComponent = () => {
  return <h2>Something went wrong, please refresh the page and try again</h2>;
};

export class AppError extends React.Component {
  
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}