import React from 'react';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from 'context/AuthContext';

interface RouteProps extends DefaultRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = true,
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();
  return (
    <DefaultRoute
      {...rest}
      render={({ location }) =>
        isPrivate === signed ? (
          <>{isPrivate ? <Component /> : <Component />}</>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
