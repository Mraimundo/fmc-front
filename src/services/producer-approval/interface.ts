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
