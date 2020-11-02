import routeMap from 'routes/route-map';
import CampaignsList from 'pages/Campaigns/List';
import CampaignsView from 'pages/Campaigns/View';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.campaign}`,
    component: CampaignsList,
    accessPage: 'Lista de campanhas do participante',
  },
  {
    path: `${routeMap.campaign}/:id`,
    component: CampaignsView,
    accessPage: 'Visualização de campanha do participante',
  },
];

export default routes;
