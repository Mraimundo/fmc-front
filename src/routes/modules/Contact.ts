import Contact from 'pages/Contact';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/fale-conosco',
    component: Contact,
    accessPage: 'Página fale conosco',
  },
];

export default routes;
