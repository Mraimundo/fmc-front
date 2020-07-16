import { formatDate } from 'util/datetime';
import { Training } from '../interfaces';

export interface Response {
  id: number;
  title: string;
  category: string[];
  startDate: string;
  endDate: string;
  imageUrl: string;
}

export default (data: Training[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    title: item.title,
    category: item.categories.map(i => i.name),
    startDate: formatDate(item.startDate),
    endDate: formatDate(item.endDate),
    imageUrl: item.imageUrl,
  }));
};
