import React, { ComponentType, Component } from 'react';

const errorBoundary = (Element: ComponentType, errorCallback: (error: Error) => void) => {
  return class ErrorBoundary extends Component {
    componentDidCatch(err: Error) {
      errorCallback(err);
    }

    render() {
      return typeof Element === 'function' ? <Element /> : React.isValidElement(Element) ? Element : null;
    }
  };
};

export default errorBoundary;
