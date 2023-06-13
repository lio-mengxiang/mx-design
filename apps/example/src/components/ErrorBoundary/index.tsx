import React from 'react';
import { useRouteError } from 'react-router-dom';

type RouteError = Error & { status?: number; statusText?: string };

function ErrorBoundary() {
  const err = useRouteError() as RouteError;
  console.log('er222r: ', err);
  return (
    <div>
      <strong>Error {err.status || 500}</strong>: {err.statusText ?? err.message}
    </div>
  );
}

export default ErrorBoundary;
