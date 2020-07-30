import { pluginApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Campaign, Status, StatusText } from './interfaces/Campaign';
import getPtStatus from './util/getPtStatusText';

interface EstablishmentApi {
  id: number;
  name: string;
  cnpj: string;
  client_code: string;
  balance: number;
}

interface ProductApi {
  id: number;
  name: string;
  description: string;
  created: Date;
  modified: Date;
  segment: string;
  volume: number;
}

interface MechanicApi {
  id: number;
  name: string;
  picture: string;
  secondary_picture: string;
  third_picture: string;
  fourth_picture: string;
  description: string;
  created: Date;
  modified: Date;
}

interface CampaignApi {
  id: number;
  name: string;
  description: string;
  reward_name: string;
  reward_description: string;
  observation: string;
  start_date: Date;
  end_date: Date;
  fmc_campaign_type_id: number;
  use_points: boolean;
  points: number;
  use_complementary_points: boolean;
  complementary_points: number;
  use_local_points: boolean;
  local_points: number;
  use_crm_points: boolean;
  crm_points: number;
  sell_in_result: number;
  sell_out_result: number;
  results_file: string;
  status: Status;
  created: Date;
  modified: Date;
  participant_id: number;
  status_text: StatusText;
  /* approvers: []; */
  establishments: EstablishmentApi[];
  products: ProductApi[];
  type: MechanicApi;
}

interface ApiResponse {
  data: CampaignApi[];
  pagination: Pagination;
}

interface Response {
  data: Campaign[];
  pagination: Pagination;
}

export default async (): Promise<Response> => {
  /* ?page=1&limit=15&order=desc&status[0]=published&establishments[0]=1&types[0]=1&regional[0]=Arroz&directorships[0]=Sul&participants[0]=1 */
  const {
    data: { data, pagination },
  } = await pluginApi.get<ApiResponse>('campaigns');
  return {
    data: data.map(item => ({
      id: item.id,
      title: item.name,
      description: item.description,
      startDate: item.start_date,
      endDate: item.end_date,
      createdAt: item.created,
      affordPoints: item.points,
      complementaryAffordPoints: item.complementary_points,
      complementaryLocalBudget: item.local_points,
      complementaryCrmBudget: item.crm_points,
      expectedSellIn: item.sell_in_result,
      expectedSellOut: item.sell_out_result,
      observation: item.observation,
      status: {
        id: item.status,
        name: getPtStatus(item.status_text),
        statusText: item.status_text,
      },
      goals: item.products.map(product => ({
        product: {
          id: product.id,
          name: product.name,
        },
        expectedVolume: product.volume,
      })),
      mechanic: {
        id: 1, // item.type.id,
        name: 'ESPERANDO API', // item.type.name,
        homeImage: '', // item.type.picture,
        internalImage: '', // item.type.secondary_picture,
        emailImage: '', // item.type.third_picture,
        campaignListImage: '', // item.type.fourth_picture,
        description: 'ESPERANDO API', // item.type.description,
        created: new Date(), // item.type.created,
      },
      audience: item.establishments.map(customer => ({
        customer: {
          id: customer.id,
          name: customer.name,
          cnpj: customer.cnpj,
        },
        balance: customer.balance,
      })),
      prize: {
        description: item.reward_description,
        name: item.reward_name,
      },
    })),
    pagination,
  };
};
