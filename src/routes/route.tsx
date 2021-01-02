import React from 'react';
import Layout from 'pages/_layouts';
import {
  RouteProps as DefaultRouteProps,
  Route as DefaultRoute,
  Redirect,
} from 'react-router-dom';
import { RegisterAccessLog } from 'services/registerAccessLog';

import { useAuth } from 'context/AuthContext';
import useMenu from 'state/hooks/use-menu';

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
  const { signed, loading } = useAuth();
  const { menu } = useMenu();

  console.log('signed', signed);

  if (accessPage) {
    RegisterAccessLog(accessPage);
  }

  if (special) {
    return <DefaultRoute {...rest} render={() => <Component />} />;
  }

  /* MAYCONN Layout Temporario para nao private */

  if (loading === undefined) {
    return <></>;
  }

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
              <Component />
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
