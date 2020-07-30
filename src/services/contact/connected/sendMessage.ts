import { vendavallApi } from 'services/api';
import { SendMessageDTO } from './dtos';

interface ContactResponse {
  type: 'success' | 'error';
  message: string;
}

interface Request {
  message: string;
  file: string;
  contact_id: number;
}

export default async (message: SendMessageDTO): Promise<ContactResponse> => {
  const request: Request = {
    message: message.message,
    file: message.fileUrl,
    contact_id: message.contactId,
  };

  const { data } = await vendavallApi.post<ContactResponse>(
    'contacts/message',
    request,
  );

  return data;
};
