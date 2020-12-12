import routeMap from 'routes/route-map';
import QrCodeComponent from 'pages/QrCode';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.qrCode,
    component: QrCodeComponent,
    accessPage: 'Página de QrCode',
    special: true,
  },
];

export default routes;
