import routeMap from 'routes/route-map';
import Calculator from 'pages/PointsSimulator/Calculator';
import Result from 'pages/PointsSimulator/Result';

import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.pointsSimulator.calculator}`,
    component: Calculator,
    accessPage: 'Simulador de Pontos',
  },
  {
    path: `${routeMap.pointsSimulator.result}`,
    component: Result,
    accessPage: 'Simulador de Pontos - Resultado',
  },
];

export default routes;
