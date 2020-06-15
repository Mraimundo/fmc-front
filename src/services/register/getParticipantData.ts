import { pluginApi } from 'services/api';
import { IProfile } from 'config/constants';

interface Address {
  id: number;
  zip_code: string;
  logradouro: string;
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

interface Establishment {
  id: number;
  name: string;
  cnpj: string;
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

interface ParticipantResponse {
  id: number;
  cpf: string;
  rg: string;
  name: string;
  email: string;
  picture: string;
  cell_phone: string;
  birth_date: Date;
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
}

export interface Participant extends ParticipantResponse {
  password: string;
  password_confirmation: string;
  education_level: string;
  regulations_accepted: Regulation[];
}

const build = (data: ParticipantResponse): Participant => {
  return {
    ...data,
    password: '',
    password_confirmation: '',
    education_level: '',
    regulations_accepted: [],
  };
};

export const getParticipantByCpf = async (
  cpf: string,
): Promise<Participant> => {
  const { data } = await pluginApi.get<ParticipantResponse>(
    `participants/register?cpf=${cpf}`,
  );
  return build(data);
};

export const getParticipantByUpn = async (
  upn: string,
): Promise<Participant> => {
  const { data } = await pluginApi.get<ParticipantResponse>(
    `participants/register?upn=${upn}`,
  );
  return build(data);
};
