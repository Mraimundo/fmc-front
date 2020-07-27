import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteModule } from './modules/RouteModule';

import Auth from './modules/Auth';
import CampaignsManager from './modules/CampaignsManager';
import Contact from './modules/Contact';
import Extract from './modules/Extract';
import Faq from './modules/Faq';
import Gallery from './modules/Gallery';
import Home from './modules/Home';
import News from './modules/News';
import ParticipantsIndication from './modules/ParticipantsIndication';
import PointsManagement from './modules/PointsManagement';
import Showcase from './modules/Showcase';
import Training from './modules/Training';

import Route from './Route';

const routesArray: RouteModule[][] = [
  Auth,
  CampaignsManager,
  Contact,
  Extract,
  Faq,
  Gallery,
  Home,
  News,
  ParticipantsIndication,
  PointsManagement,
  Showcase,
  Training,
];

const Routes: React.FC = () => (
  <Switch>
    {routesArray.map(componentArray =>
      componentArray.map(component => (
        <Route
          exact
          path={component.path}
          component={component.component}
          isPrivate={!component.isPublic}
          special={!!component.special}
        />
      )),
    )}
  </Switch>
);

export default Routes;
