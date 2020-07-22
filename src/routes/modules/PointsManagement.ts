import PointManagement from 'pages/PointManagement';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/distribuicao-de-pontos',
    component: PointManagement,
    accessPage: 'Página de distribuição de pontos',
  },
];

export default routes;
