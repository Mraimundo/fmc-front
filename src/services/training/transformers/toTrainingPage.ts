import { formatDate } from 'util/datetime';
import { Training } from '../interfaces';
import getStatusText from '../util/getStatusText';

interface Document {
  id: number;
  url: string;
  imageUrl: string;
}

export interface Response {
  id: number;
  title: string;
  category: string[];
  startDate: string;
  endDate: string;
  imageUrl: string;
  status: string;
  summary: string;
  videoUrl: string;
  body: string;
  documents: Document[];
}

export default (data: Training): Response => {
  return {
    id: data.id,
    category: data.categories.map(i => i.name),
    title: data.title,
    startDate: formatDate(data.startDate),
    endDate: formatDate(data.endDate),
    imageUrl: data.media.find(item => item.type === 'image')?.url || '',
    videoUrl: data.media.find(item => item.type === 'video')?.url || '',
    status: getStatusText(data.status),
    summary: data.summary,
    body: data.body,
    documents: data.media
      .filter(item => item.type === 'document')
      .map(item => ({ id: item.id, url: item.url, imageUrl: data.imageUrl })),
  };
};
