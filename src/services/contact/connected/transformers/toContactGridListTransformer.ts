import { formatDate, extractHourFromDate } from 'util/datetime';
import { Contact } from '../interfaces';

export const PENDING = 0;
export const ANSWERED = 1;
export const CLOSED = 2;

export type StatusText = 'pending' | 'answered' | 'closed' | 'undefined';

export interface Response {
  id: number;
  date: string;
  time: string;
  category: string;
  subject: string;
  status: number;
  statusText: StatusText;
}

const getStatusText = (statusNumber: number): StatusText => {
  switch (statusNumber) {
    case PENDING:
      return 'pending';
    case ANSWERED:
      return 'answered';
    case CLOSED:
      return 'closed';
    default:
      return 'undefined';
  }
};

export default (data: Contact[]): Response[] => {
  return data.map(item => ({
    id: item.id,
    date: formatDate(item.created),
    time: extractHourFromDate(item.created),
    category: item.contact_category_title,
    status: item.status,
    statusText: getStatusText(item.status),
    subject: item.contact_subject_title,
  }));
};
