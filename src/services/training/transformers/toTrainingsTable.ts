import { formatDate } from 'util/datetime';
import { Training, Status, TRAINING_STATUS } from '../interfaces';

const getStatusText = (status: Status): string => {
  switch (status) {
    case TRAINING_STATUS.AVAILABLE:
      return 'Disponível';
    case TRAINING_STATUS.FINISHED:
      return 'Finalizado';
    default:
      return 'Status desconhecido';
  }
};

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
    category: item.category.map(i => i.name).join(', '),
    startDateParticipation: item.participation.started_date
      ? formatDate(item.participation.started_date)
      : '',
    endDateParticipation: item.participation.finished_date
      ? formatDate(item.participation.finished_date)
      : '',
    status: getStatusText(item.status),
    certificateUrl: item.participation.certificate_url || '',
  }));
};
