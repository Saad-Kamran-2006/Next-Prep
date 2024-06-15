'use client'
import React from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      error
      <h2>{error.message}</h2>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default ErrorBoundary;
