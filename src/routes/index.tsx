import React from 'react';
import { Switch } from 'react-router-dom';

import SignInUp from 'pages/Auth/SignInUp';
import Dashboard from 'pages/Dashboard';
import Dashboard2 from 'pages/Dashboard2';
import FirstAccess from 'pages/Auth/FirstAccess';
import News from 'pages/News/List';
import View from 'pages/News/View';
import ParticipantIndication from 'pages/ParticipantIndication';
import RegisterEdit from 'pages/Auth/RegisterEdit';
import Gallery from 'pages/Gallery/List';
import Regulation from 'pages/Auth/Regulation';
import Contact from 'pages/Contact';
import Faq from 'pages/Faq';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignInUp} isPrivate={false} />
    <Route exact path="/recover" component={SignInUp} isPrivate={false} />
    <Route
      exact
      path="/firstAccess"
      component={FirstAccess}
      isPrivate={false}
    />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/edit" component={RegisterEdit} />
    <Route exact path="/dashboard2" component={Dashboard2} />
    <Route exact path="/indication" component={ParticipantIndication} />
    <Route exact path="/news" component={News} />
    <Route exact path="/news/:id" component={View} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/regulation" component={Regulation} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/faq" component={Faq} />
  </Switch>
);

export default Routes;
