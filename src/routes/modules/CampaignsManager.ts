import CampaignManager from 'pages/Campaigns/Manager';
import NewCampaign from 'pages/Campaigns/New';
import CampaignsList from 'pages/Campaigns/List';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/gerenciamento-de-campanhas',
    component: CampaignManager,
    accessPage: 'Página de edição e gerenciamento de uma campanha',
  },
  {
    path: '/gerenciamento-de-campanhas/registrar',
    component: NewCampaign,
    accessPage: 'Página de criação de uma nova campanha',
  },
  {
    path: '/gerenciamento-de-campanhas/lista',
    component: CampaignsList,
    accessPage: 'Lista de campanhas',
  },
];

export default routes;