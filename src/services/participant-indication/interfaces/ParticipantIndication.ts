export interface ParticipantIndication {
  id: number;
  superior_participant_id: number;
  status: number;
  created: string;
  modified: string;
  participant: {
    id: number;
    name: string;
    cpf: string;
    email: string;
    area_code: string;
    cell_phone: string;
    status: number;
    profile: string;
  };
  role: {
    id: number;
    name: string;
  };
  establishment: {
    id: number;
    name: string;
    cnpj: string;
  };
  subsidiary: {
    id: number;
    name: string;
    city: string;
    status: number;
    created: string;
  };
}
