import routeMap from 'routes/route-map';
import ProducerResearch from 'pages/ProducerResearch/List';

import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.research,
    component: ProducerResearch,
    accessPage: 'Página de pesquisas',
  },
];

export default routes;
