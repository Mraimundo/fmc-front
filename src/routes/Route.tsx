import React from 'react';
import Layout from 'pages/_layouts';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from 'context/AuthContext';
import { MenuProvider } from 'context/MenuContext';

interface RouteProps extends DefaultRouteProps {
  isPrivate?: boolean;
  special?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = true,
  special = false,
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();
  if (special) {
    return <DefaultRoute {...rest} render={() => <Component />} />;
  }

  return (
    <DefaultRoute
      {...rest}
      render={({ location }) =>
        isPrivate === signed ? (
          <>
            {isPrivate ? (
              <MenuProvider>
                <Layout>
                  <Component />
                </Layout>
              </MenuProvider>
            ) : (
              <Component />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'dashboard',
              state: { from: location },
            }}
          />
        )}
    />
  );
};

export default Route;
