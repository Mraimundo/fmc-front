import HarvestTerm from 'pages/HarvestTerm';
import routeMap from 'routes/route-map';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.harvestTerm,
    component: HarvestTerm,
    accessPage: 'Termo de Safra',
  },
];

export default routes;
