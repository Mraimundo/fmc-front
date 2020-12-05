import routeMap from 'routes/route-map';
import Calculator from 'pages/PointsSimulator/';

import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.pointsSimulator.calculator}`,
    component: Calculator,
    accessPage: 'Simulador de Pontos',
  },
];

export default routes;
