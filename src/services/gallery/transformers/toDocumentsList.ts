import { formatDate } from 'util/datetime';
import getUrlToForceDownload from 'services/storage/getUrlToForceDownload';
import { Media } from '../interfaces';

export interface Response {
  id: number;
  url: string;
  download_url: string;
  title: string;
  description: string;
  date: string;
  coverPictureUrl: string;
  fileName: string;
  fileType: string;
}

export default (data: Media[]): Response[] => {
  return data
    .filter(item => item.type === 'document')
    .map(item => ({
      id: item.id,
      url: item.url,
      title: item.title,
      description: item.description,
      date: formatDate(item.created),
      coverPictureUrl: item.cover_picture,
      fileName: item.meta.originalName,
      fileType: item.meta.extension,
      download_url: getUrlToForceDownload({
        filename: item.meta.originalName,
        url: item.url,
      }),
    }));
};
