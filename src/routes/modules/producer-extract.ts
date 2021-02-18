import routeMap from 'routes/route-map';
import ProducerExtract from 'pages/ProducerExtract';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.producerExtract,
    component: ProducerExtract,
    accessPage: 'Página de extrato',
  },
];

export default routes;
