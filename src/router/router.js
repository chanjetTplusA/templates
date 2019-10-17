import React from 'react';
import { Route } from 'react-router-dom';

export default Router = ({ component: Component, children, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props}><Switch>{children}</Switch></Component>
    )}
  />
);
