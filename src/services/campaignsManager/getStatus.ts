import { Status, CAMPAIGN_STATUS } from './interfaces/Campaign';

export interface StatusResponse {
  id: Status;
  name: string;
}

const data: StatusResponse[] = [
  {
    id: CAMPAIGN_STATUS.ACTIVE,
    name: 'Ativo',
  },
  {
    id: CAMPAIGN_STATUS.BUILDING,
    name: 'Em elaboração',
  },
  {
    id: CAMPAIGN_STATUS.CANCELED,
    name: 'Cancelado',
  },
  {
    id: CAMPAIGN_STATUS.WAITING_APPROVAL,
    name: 'Aguardando aprovação',
  },
];

export default async (): Promise<StatusResponse[]> => {
  return data;
};
