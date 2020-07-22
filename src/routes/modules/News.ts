import News from 'pages/News/List';
import View from 'pages/News/View';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/news',
    component: News,
    accessPage: 'Página de Notícias',
  },
  {
    path: '/news/:id',
    component: View,
    accessPage: 'Página de Visualiazação de Notícia',
  },
];

export default routes;
