import { formatDate } from 'util/datetime';
import { Media } from '../interfaces';

export interface Response {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
}

export default (data: Media[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    url: item.url,
    title: item.title,
    description: item.description,
    date: formatDate(item.created),
  }));
};
