import { formatDate } from 'util/datetime';
import { Surveys } from '../interfaces';

export interface Response {
  id: number;
  pictureUrl: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  body: string;
}

export default (item: Surveys): Response => {
  return {
    id: item.id,
    pictureUrl: item.cover,
    title: item.title,
    date: formatDate(item.created),
    summary: item.summary,
    category: item.category.name,
    body: item.body,
  };
};
