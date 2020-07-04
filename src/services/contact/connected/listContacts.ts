import { vendavallApi } from 'services/api';
import { Contact } from './interfaces';

interface ApiResponse {
  contacts: Contact[];
}

export default async (): Promise<Contact[]> => {
  const { data } = await vendavallApi.get<ApiResponse>(
    'contacts/list-contacts-participant',
  );
  return data.contacts;
};
