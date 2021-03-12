import HarvestTerm from 'pages/HarvestTerm';
import RouteMap from 'routes/route-map';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: RouteMap.harvestTerm,
    component: HarvestTerm,
    accessPage: 'Termo de Safra',
  },
];

export default routes;
