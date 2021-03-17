import routeMap from 'routes/route-map';
import InternalSearch from 'pages/InternalPage/InternalSearch';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.internal,
    component: InternalSearch,
    accessPage: 'Resultado da pesquisa',
  },

];

export default routes;
