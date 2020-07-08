import React from 'react';
import { Switch } from 'react-router-dom';

import Autologin from 'pages/Auth/Autologin';
import SignIn from 'pages/SignIn';
import Dashboard from 'pages/Dashboard';
import FirstAccess from 'pages/FirstAccess';
import News from 'pages/News/List';
import View from 'pages/News/View';
import Gallery from 'pages/Gallery/List';
import Contact from 'pages/Contact';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} isPrivate={false} />
    <Route path="/autologin" component={Autologin} isPrivate={false} special />
    <Route exact path="/recover" component={SignIn} isPrivate={false} />
    <Route
      exact
      path="/firstAccess"
      component={FirstAccess}
      isPrivate={false}
    />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/news" component={News} />
    <Route exact path="/news/:id" component={View} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
