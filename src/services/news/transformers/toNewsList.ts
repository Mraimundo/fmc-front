import { formatDate } from 'util/datetime';
import { News } from '../interfaces';

export interface Response {
  id: number;
  pictureUrl: string;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export default (data: News[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    pictureUrl: item.cover,
    title: item.title,
    date: formatDate(item.created),
    summary: item.summary,
    category: item.category.name,
  }));
};
