import routeMap from 'routes/route-map';
import Cockpit from 'pages/Cockpit';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.cockpit,
    component: Cockpit,
    accessPage: 'Página do Cockpit',
  },
];

export default routes;
