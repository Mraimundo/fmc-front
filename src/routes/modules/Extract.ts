import routeMap from 'routes/route-map';
import Extract from 'pages/Extract';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.extract.channel,
    component: Extract,
    accessPage: 'Página de extrato',
  },
  {
    path: routeMap.extract.my,
    component: Extract,
    accessPage: 'Página de extrato',
  },
];

export default routes;
