import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from 'pages/SignIn';
import Dashboard from 'pages/Dashboard';
import Dashboard2 from 'pages/Dashboard2';
import FirstAccess from 'pages/FirstAccess';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} isPrivate={false} />
    <Route
      exact
      path="/firstAccess"
      component={FirstAccess}
      isPrivate={false}
    />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard2" component={Dashboard2} />
  </Switch>
);

export default Routes;
