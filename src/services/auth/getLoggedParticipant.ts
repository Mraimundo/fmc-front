import { pluginApi } from 'services/api';

interface Address {
  id: number;
  zip_code: string;
  logradouro: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

interface Role {
  id: number;
  identifier: string;
  name: string;
}

interface Establishment {
  id: number;
  name: string;
}

export interface Participant {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
  cpf: string;
  ddd_mobile: string;
  mobile_phone: string;
  nick_name: string;
  gender: string;
  birth_date: string;
  place_of_birth: string;
  marital_status: string;
  rg: string;
  address: Address[];
  role: Role;
  establishment: Establishment;

  upn: string;
  rg_emitter: string;
  rg_emitter_uf: string;
  pis_nis: string;
  graduation: string;
  nationality: string;
  company: string;
  filial: string;
  department: string;
}

export default async (): Promise<Participant> => {
  try {
    const { data } = await pluginApi.get<Participant>('participants/profile');
    return data;
  } catch {
    return {} as Participant;
  }
};
