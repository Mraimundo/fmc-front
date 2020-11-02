import routeMap from 'routes/route-map';
import News from 'pages/News/List';
import View from 'pages/News/View';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.news,
    component: News,
    accessPage: 'Página de Notícias',
  },
  {
    path: `${routeMap.news}/:id`,
    component: View,
    accessPage: 'Página de Visualiazação de Notícia',
  },
];

export default routes;
