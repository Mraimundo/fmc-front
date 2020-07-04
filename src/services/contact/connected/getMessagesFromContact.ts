import { vendavallApi } from 'services/api';
import { Message } from './interfaces';

interface ApiResponse {
  data: Message[];
}

export default async (contactId: number): Promise<Message[]> => {
  const { data } = await vendavallApi.get<ApiResponse>(
    `contacts/get-records?contact_id=${contactId}`,
  );
  return data.data;
};
