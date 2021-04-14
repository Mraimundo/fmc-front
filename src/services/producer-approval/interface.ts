import { string } from 'yup';

export interface Farmer {
  id: number;
  name: string;
  cpf: string;
  picture: string;
  client_group: string;
  email: string;
  cell_phone: string;
  created: string;
  request_status: string;
  request_id: number;
}

export interface Summary {
  waiting: number;
  approved: number;
  rejected: number;
}

export interface FilterOptions {
  status?: string;
  search?: string;
  page?: number;
}

export interface ReproveMessage {
  message: string;
  update_date: string;
  create: string;
}
