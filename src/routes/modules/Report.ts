import routeMap from 'routes/route-map';
import Report from 'pages/Dashboard';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.report,
    component: Report,
    accessPage: 'Página de Relatórios',
  },
];

export default routes;
