import routeMap from 'routes/route-map';
import Calculator from 'pages/PointsSimulator/';
import OpenInNewTab from 'pages/PointsSimulator/Pdf/open-in-new-tab';
import SendByEmail from 'pages/PointsSimulator/Pdf/send-by-email';

import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.pointsSimulator.calculator}`,
    component: Calculator,
    accessPage: 'Simulador de Pontos',
  },
  {
    path: `${routeMap.pointsSimulator.pdfGeneratorPage}`,
    component: OpenInNewTab,
    accessPage: 'Gerador Pdf Simulador de Pontos',
    special: true,
  },
  {
    path: `${routeMap.pointsSimulator.pdfGeneratorEmail}`,
    component: SendByEmail,
    accessPage: 'Gerador Pdf Simulador de Pontos - Enviar por email',
    special: true,
  },
];

export default routes;
