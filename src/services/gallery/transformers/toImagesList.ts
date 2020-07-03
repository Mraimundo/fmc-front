import { formatDate } from 'util/datetime';
import getUrlToForceDownload from 'services/storage/getUrlToForceDownload';
import { Media } from '../interfaces';

export interface Response {
  id: number;
  url: string;
  download_url: string;
  title: string;
  date: string;
  category: string[];
}

export default (data: Media[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    url: item.url,
    download_url: getUrlToForceDownload({
      filename: item.meta.originalName,
      url: item.url,
    }),
    title: item.description,
    date: formatDate(item.created),
    category: item.tags.map(tag => tag.name),
  }));
};
