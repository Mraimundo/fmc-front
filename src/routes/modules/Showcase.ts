import ShowCase from 'pages/ShowCase';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/vitrine',
    component: ShowCase,
    accessPage: 'Página catálogo de prêmios',
  },
];

export default routes;
