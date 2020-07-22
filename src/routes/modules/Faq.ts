import Faq from 'pages/Faq';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/faq',
    component: Faq,
    accessPage: 'Página de faq',
  },
];

export default routes;
