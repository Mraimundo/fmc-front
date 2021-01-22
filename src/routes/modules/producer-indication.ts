import routeMap from 'routes/route-map';
import ProducerIndication from 'pages/ProducerIndication';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.producer,
    component: ProducerIndication,
    accessPage: 'Página para indicar produtor',
  },
];

export default routes;
