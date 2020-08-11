import numbersOnly from 'util/numbersOnly';
import { Participant, Regulation } from 'services/auth/interfaces/Participant';
import { formatDate } from 'util/datetime';

interface SaveRequest {
  cpf: string;
  upn: string;
  password: string;
  password_confirmation: string;
  nick_name: string;
  name: string;
  email: string;
  area_code: string;
  cell_phone: string;
  picture: string;
  education_level: string;
  gender: string;
  place_of_birth: string;
  nationality: string;
  marital_status: string;
  rg: string;
  rg_emitter: string;
  rg_emitter_uf: string;
  pis_nis: string;
  zip_code: string;
  public_place: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state_code: string;
  district: string;
  birth_date: string;

  establishment_id: number;
  role_id: number;
  regulations_accepted: Regulation[];
  access_premio_ideall: boolean;
}

export default (participant: Participant): SaveRequest => {
  return {
    birth_date: formatDate(participant.birth_date),
    cpf: numbersOnly(participant.cpf),
    upn: participant.upn,
    nick_name: participant.nick_name,
    name: participant.name,
    email: participant.email,
    area_code: numbersOnly(participant.area_code),
    cell_phone: numbersOnly(participant.cell_phone),
    picture: participant.picture,
    gender: participant.gender,
    place_of_birth: participant.place_of_birth,
    nationality: participant.nationality,
    marital_status: participant.marital_status,
    rg: numbersOnly(participant.rg),
    rg_emitter: participant.rg_emitter,
    rg_emitter_uf: participant.rg_emitter_uf,
    pis_nis: numbersOnly(participant.pis_nis),
    zip_code: numbersOnly(participant.address.zip_code),
    public_place: participant.address.public_place,
    street: participant.address.street,
    number: participant.address.number,
    complement: participant.address.complement,
    city: participant.address.city,
    state_code: participant.address.state_code,
    district: participant.address.district,
    establishment_id: participant.establishment.id,
    role_id: participant.role.id,
    password: participant.password,
    password_confirmation: participant.password_confirmation,
    education_level: participant.education_level,
    regulations_accepted: participant.regulations_accepted,
    access_premio_ideall:
      participant.profile === 'FOCALPOINT'
        ? participant.access_premio_ideall
        : true,
  };
};
