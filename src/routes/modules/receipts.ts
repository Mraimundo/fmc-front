import routeMap from 'routes/route-map';
import ReceiptsComponent from 'pages/Receipts';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.receipts,
    component: ReceiptsComponent,
    accessPage: 'Minhas Notas Fiscais',
  },
];

export default routes;
