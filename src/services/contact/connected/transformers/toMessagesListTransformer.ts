import { formatDate, extractHourFromDate } from 'util/datetime';
import { Message } from '../interfaces';

export interface Response {
  id: number;
  date: string;
  time: string;
  type: 'r' | 'p';
  responsibleName: string;
  fileUrl: string;
}

export default (data: Message[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    date: formatDate(item.created),
    time: extractHourFromDate(item.created),
    type: item.type,
    responsibleName: item.resposible_name,
    fileUrl: item.file,
  }));
};
