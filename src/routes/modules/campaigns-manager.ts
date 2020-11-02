import routeMap from 'routes/route-map';
import CampaignManager from 'pages/CampaignsManagement/Manager';
import NewCampaign from 'pages/CampaignsManagement/New';
import ViewCampaign from 'pages/CampaignsManagement/View';
import CampaignsList from 'pages/CampaignsManagement/List';
import { RouteModule } from './route-module';

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
