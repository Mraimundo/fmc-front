import { formatDate } from 'util/datetime';
import { Campaign, StatusText } from '../interfaces/Campaign';
import getPtStatus from '../util/getPtStatusText';

export interface Response {
  id: number;
  solicitationDate: string;
  campaign: string;
  edit: {
    id: number;
    status: StatusText;
  };
  status: {
    status: {
      status: StatusText;
      name: string;
    };
  };
  approval: {
    id: number;
    status: StatusText;
  };
  highlight: {
    id: number;
    highlight: boolean;
  };
  activated: {
    id: number;
    activated: boolean;
  };
}

export default (data: Campaign[]): Response[] => {
  return data.map(item => ({
    id: item.id || 0,
    campaign: item.title,
    solicitationDate: item.createdAt ? formatDate(item.createdAt) : '',
    edit: {
      id: item.id || 0,
      status: item.status.statusText,
    },
    status: {
      status: {
        status: item.status.statusText,
        name: getPtStatus(item.status.statusText),
      },
    },
    approval: {
      id: item.id || 0,
      status: item.status.statusText,
    },
    highlight: {
      id: item.id || 0,
      highlight: false, // A fazer
    },
    activated: {
      id: item.id || 0,
      activated: false, // A fazer
    },
  }));
};
