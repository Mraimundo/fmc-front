import Extract from 'pages/Extract';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/extract',
    component: Extract,
    accessPage: 'Página de extrato',
  },
  {
    path: '/myextract',
    component: Extract,
    accessPage: 'Página de extrato',
  },
];

export default routes;
