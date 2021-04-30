import routeMap from 'routes/route-map';
import ProducerApproval from 'pages/ProducerApproval';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.producerApproval,
    component: ProducerApproval,
    accessPage: 'Aprovação de Cadastros de Produtores',
  },
];

export default routes;
