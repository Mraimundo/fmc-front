import routeMap from 'routes/route-map';
import CampaignsList from 'pages/Campaigns/List';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: `${routeMap.campaign}`,
    component: CampaignsList,
    accessPage: 'Lista de campanhas do participante',
  },
];

export default routes;
