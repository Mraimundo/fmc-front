import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteModule } from './modules/RouteModule';

import Auth from './modules/Auth';
import Campaigns from './modules/Campaigns';
import CampaignsManager from './modules/CampaignsManager';
import Cockpit from './modules/Cockpit';
import Contact from './modules/Contact';
import Extract from './modules/Extract';
import Faq from './modules/Faq';
import Gallery from './modules/Gallery';
import Home from './modules/Home';
import News from './modules/News';
import ParticipantsIndication from './modules/ParticipantsIndication';
import ParticipantSimulation from './modules/ParticipantSimulation';
import PointsManagement from './modules/PointsManagement';
import Products from './modules/Products';
import Showcase from './modules/Showcase';
import Training from './modules/Training';
import Goals from './modules/Goals';
import HowParticipate from './modules/HowParticipate';

import MailManager from './modules/MailManager';

import Route from './Route';

const routesArray: RouteModule[][] = [
  Auth,
  Campaigns,
  CampaignsManager,
  Cockpit,
  Contact,
  Extract,
  Faq,
  Gallery,
  Home,
  News,
  ParticipantsIndication,
  ParticipantSimulation,
  PointsManagement,
  Products,
  Showcase,
  Training,
  Goals,
  HowParticipate,
  MailManager,
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
          accessPage={component.accessPage}
        />
      )),
    )}
  </Switch>
);

export default Routes;
