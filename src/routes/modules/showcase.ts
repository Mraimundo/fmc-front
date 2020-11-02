import routeMap from 'routes/route-map';
import ShowCase from 'pages/ShowCase';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.showcase,
    component: ShowCase,
    accessPage: 'Página catálogo de prêmios',
  },
];

export default routes;
