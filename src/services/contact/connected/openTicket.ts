import { vendavallApi } from 'services/api';
import { CreateTicketDTO } from './dtos';

interface ContactResponse {
  type: 'success' | 'error';
  message: string;
}

interface Message {
  type: 'p';
  text: string;
  fields_aditional: [];
  subcategory: [];
}

interface Request {
  contact_category_id: number;
  contact_subject_id: number;
  file: string;
  contact_records: Message[];
}

export default async (ticket: CreateTicketDTO): Promise<ContactResponse> => {
  const request: Request = {
    contact_category_id: ticket.categoryId,
    contact_subject_id: ticket.subjectId,
    file: ticket.fileUrl,
    contact_records: [
      {
        type: 'p',
        text: ticket.message,
        fields_aditional: [],
        subcategory: [],
      },
    ],
  };

  const { data } = await vendavallApi.post<ContactResponse>(
    'contacts/add',
    request,
  );

  return data;
};
