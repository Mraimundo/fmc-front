import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteModule } from './modules/route-module';

import Auth from './modules/auth';
import Campaigns from './modules/campaigns';
import CampaignsManager from './modules/campaigns-manager';
import Cockpit from './modules/cockpit';
import Contact from './modules/contact';
import Extract from './modules/extract';
import Faq from './modules/faq';
import Gallery from './modules/gallery';
import Home from './modules/home';
import MailManager from './modules/mail-manager';
import News from './modules/news';
import ParticipantsIndication from './modules/participants-indication';
import ParticipantSimulation from './modules/participant-simulation';
import PointsManagement from './modules/points-management';
import PowerBi from './modules/power-bi';
import Products from './modules/products';
import Report from './modules/report';
import Showcase from './modules/showcase';
import Training from './modules/training';
import Goals from './modules/goals';
import HowParticipate from './modules/how-participate';

import PointsSimulator from './modules/points-simulator';

import Route from './route';

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
  PowerBi,
  Report,
  PointsSimulator,
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
