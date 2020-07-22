import TrainingList from 'pages/Training/List';
import TrainingView from 'pages/Training/View';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/training',
    component: TrainingList,
    accessPage: 'Treinamentos',
  },
  {
    path: '/training/:id',
    component: TrainingView,
    accessPage: 'Treinamentos (Participar)',
  },
];

export default routes;
