import React from 'react';

const Loading = () => {
  return (
    <div className="not-found-screen">
      <div className="row">
        <div className="col not-found-content text-center">
          <h1 className="title">404</h1>
          <h3>Oh no! Page not found.</h3>
          <p>
            Sorry, the page you have requested cannot be found or doesn't exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;