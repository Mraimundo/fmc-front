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
      : '',
    status: getStatusText(item.status),
    certificateUrl: item.participation?.certificateUrl || '',
  }));
};
