import { IProfile, ApproverProfile } from 'config/constants';

interface Address {
  id: number;
  zip_code: string;
  public_place: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state_code: string;
}

interface Role {
  id: number;
  identifier: string;
  name: string;
}

export interface Establishment {
  id: number;
  name: string;
  cnpj: string;
  type_name: 'Revenda' | 'Cooperativa';
  category: 'Água' | 'Semente' | 'Terra' | 'Raiz';
  rtc_id: number | null;
  rtc_name: string | null;
}

interface Subsidiary {
  id: number;
  name: string;
  city: string;
}

export interface Regulation {
  regulation_id: string;
  version: string;
}

export interface Participant {
  id: number;
  cpf: string;
  rg: string;
  name: string;
  email: string;
  picture: string;
  cell_phone: string;
  birth_date: string;
  created: Date; // "2020-06-10T14:47:34-03:00";
  gender: string;
  area_code: string;
  upn: string;
  nick_name: string;
  nationality: string;
  place_of_birth: string;
  marital_status: string;
  rg_emitter: string;
  rg_emitter_uf: string;
  pis_nis: string;
  department: string;
  access_premio_ideall: boolean;
  profile: IProfile;
  address: Address;
  role: Role;
  establishment: Establishment;
  subsidiary: Subsidiary;
  password: string;
  password_confirmation: string;
  education_level: string;
  regulations_accepted: Regulation[];
  profile_value: ApproverProfile;
}
