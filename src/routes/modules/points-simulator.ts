import routeMap from 'routes/route-map';
import Calculator from 'pages/PointsSimulator/';
import NewTab from 'pages/PointsSimulator/new-tab';

import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.pointsSimulator.calculator}`,
    component: Calculator,
    accessPage: 'Simulador de Pontos',
  },
  {
    path: `${routeMap.pointsSimulator.pdfGeneratorPage}`,
    component: NewTab,
    accessPage: 'Gerador Pdf Simulador de Pontos',
    special: true,
  },
];

export default routes;
