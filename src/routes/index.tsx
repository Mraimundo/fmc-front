import React from 'react';
import { Redirect, Switch, Route as RouteDom } from 'react-router-dom';
import { RouteModule } from './modules/route-module';

import Auth from './modules/auth';
import Campaigns from './modules/campaigns';
import CampaignsCounting from './modules/campaigns-counting';
import CampaignsManager from './modules/campaigns-manager';
import Cockpit from './modules/cockpit';
import Contact from './modules/contact';
import ProducerExtract from './modules/producer-extract';
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
import ProducerIndication from './modules/producer-indication';
import Report from './modules/report';
import Showcase from './modules/showcase';
import Training from './modules/training';
import Goals from './modules/goals';
import HowParticipate from './modules/how-participate';
import QrCode from './modules/qr-code';
import Receipts from './modules/receipts';
import CatalogoPi from './modules/catalogo-pi';

import PointsSimulator from './modules/points-simulator';
import FlyingHighPublic from './modules/flying-high';

import Route from './route';

const routesArray: RouteModule[][] = [
  Auth,
  Campaigns,
  CampaignsCounting,
  CampaignsManager,
  Cockpit,
  Contact,
  ProducerExtract,
  Extract,
  Faq,
  Gallery,
  Home,
  News,
  ParticipantsIndication,
  ParticipantSimulation,
  PointsManagement,
  Products,
  ProducerIndication,
  Showcase,
  Training,
  Goals,
  HowParticipate,
  MailManager,
  PowerBi,
  Report,
  PointsSimulator,
  QrCode,
  Receipts,
  CatalogoPi,
  FlyingHighPublic,
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
    <RouteDom path="*" render={() => <Redirect to="/home" />} />
  </Switch>
);

export default Routes;
