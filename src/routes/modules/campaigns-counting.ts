import routeMap from 'routes/route-map';
import CampaignCounting from 'pages/CampaignsCounting';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.campaignCounting}`,
    component: CampaignCounting,
    accessPage: 'Página de apuração de campanhas',
  },
];

export default routes;
