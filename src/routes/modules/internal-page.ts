import routeMap from 'routes/route-map';
import InternalSearch from 'pages/InternalPage/InternalSearch';
import View from 'pages/InternalPage/View';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.InternalPage.questions,
    component: InternalSearch,
    accessPage: 'Respoder pesquisas',
  },
  {
    path: routeMap.InternalPage.answers,
    component: View,
    accessPage: 'Resultado das pesquisas',
  },
];

export default routes;
