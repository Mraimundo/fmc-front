import { formatDate } from 'util/datetime';
import { Training } from '../interfaces';
import getStatusText from '../util/getStatusText';

export interface Response {
  id: number;
  title: string;
  category: string;
  startDateParticipation: string;
  endDateParticipation: string;
  status: string;
  certificateUrl: string;
  custom: {
    id: number;
    approved: boolean;
    certificateUrl: string;
  };
}

export default (data: Training[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    title: item.title,
    category: item.categories.map(i => i.name).join(', '),
    startDateParticipation: item.participation?.startedDate
      ? formatDate(item.participation.startedDate)
      : '',
    endDateParticipation: item.participation?.finishedDate
      ? formatDate(item.participation.finishedDate)
      : ``,
    status:
      item.participation?.approved ||
      (item.maxTries <= (item.participation?.totalAttempts || 0) &&
        item.maxTries !== 0)
        ? 'Finalizado'
        : getStatusText(item.status),
    certificateUrl: '',
    custom: {
      id: item.id,
      approved: !!item.participation?.approved,
      certificateUrl: '',
    },
  }));
};
