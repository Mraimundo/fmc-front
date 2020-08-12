import routeMap from 'routes/route-map';
import Goals from 'pages/Goals';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.goal,
    component: Goals,
    accessPage: 'Metas',
  },
];

export default routes;
