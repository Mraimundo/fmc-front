import { formatDate, extractHourFromDate } from 'util/datetime';
import getUrlToForceDownload from 'services/storage/getUrlToForceDownload';
import { Message } from '../interfaces';

export interface Response {
  id: number;
  date: string;
  time: string;
  type: 'r' | 'p';
  name: string;
  fileUrl: string;
  message: string;
}

export default (data: Message[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    date: formatDate(item.created),
    time: extractHourFromDate(item.created),
    type: item.type,
    name: item.resposible_name,
    fileUrl: item.file
      ? getUrlToForceDownload({
          url: item.file,
          filename: `anexo${item.file.substr(item.file.lastIndexOf('.'))}`,
        })
      : '',
    message: item.text,
  }));
};
