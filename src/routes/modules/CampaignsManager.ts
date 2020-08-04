import routeMap from 'routes/route-map';
import CampaignManager from 'pages/Campaigns/Manager';
import NewCampaign from 'pages/Campaigns/New';
import ViewCampaign from 'pages/Campaigns/View';
import CampaignsList from 'pages/Campaigns/List';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: `${routeMap.campaignManagement}/editar/:id`,
    component: CampaignManager,
    accessPage: 'Página de edição e gerenciamento de uma campanha',
  },
  {
    path: `${routeMap.campaignManagement}/visualizar/:id`,
    component: ViewCampaign,
    accessPage: 'Página de visualização e gerenciamento de uma campanha',
  },
  {
    path: `${routeMap.campaignManagement}/registrar`,
    component: NewCampaign,
    accessPage: 'Página de criação de uma nova campanha',
  },
  {
    path: `${routeMap.campaignManagement}/lista`,
    component: CampaignsList,
    accessPage: 'Lista de campanhas',
  },
];

export default routes;
