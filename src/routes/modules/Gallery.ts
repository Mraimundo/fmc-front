import Gallery from 'pages/Gallery/List';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/gallery',
    component: Gallery,
    accessPage: 'Página galeria',
  },
];

export default routes;
