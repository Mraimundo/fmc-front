import React from 'react';
import Layout from 'pages/_layouts';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
  Redirect,
} from 'react-router-dom';
import { RegisterAccessLog } from 'services/registerAccessLog';

import { useAuth } from 'context/AuthContext';

interface RouteProps extends DefaultRouteProps {
  isPrivate?: boolean;
  special?: boolean;
  accessPage?: string;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = true,
  special = false,
  component: Component,
  accessPage,
  ...rest
}) => {
  const { signed } = useAuth();

  if (accessPage) {
    RegisterAccessLog(accessPage);
  }

  if (special) {
    return <DefaultRoute {...rest} render={() => <Component />} />;
  }

  /* MAYCONN Layout Temporario para nao private */

  return (
    <DefaultRoute
      {...rest}
      render={({ location }) =>
        isPrivate === signed ? (
          <>
            {isPrivate ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Layout>
                <Component />
              </Layout>
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
