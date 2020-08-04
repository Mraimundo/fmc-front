import routeMap from 'routes/route-map';
import PointManagement from 'pages/PointManagement';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.pointManagement,
    component: PointManagement,
    accessPage: 'Página de distribuição de pontos',
  },
];

export default routes;
