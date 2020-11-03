import routeMap from 'routes/route-map';
import PointsSimulator from 'pages/PointsSimulator';

import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.pointsSimulator}`,
    component: PointsSimulator,
    accessPage: 'Simulador de Pontos',
  },
];

export default routes;
