import { formatDate, extractHourFromDate } from 'util/datetime';
import { Comment } from '../interfaces/Campaign';

export interface Response {
  date: string;
  time: string;
  side: 'right' | 'left';
  name: string;
  message: string;
}

export default (data: Comment[]): Response[] => {
  return data.map(item => ({
    date: formatDate(item.date),
    time: extractHourFromDate(item.date),
    side: 'right',
    name: item.name,
    message: item.message,
  }));
};
