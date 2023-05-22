import React from 'react';

const ErrorHandler = ({ error }) => {
  return <p>Error: {error.message}</p>;
};

export default ErrorHandler;
