import routeMap from 'routes/route-map';
import TrainingList from 'pages/Training/List';
import TrainingView from 'pages/Training/View';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.training,
    component: TrainingList,
    accessPage: 'Treinamentos',
  },
  {
    path: `${routeMap.training}/:id`,
    component: TrainingView,
    accessPage: 'Treinamentos (Participar)',
  },
];

export default routes;
