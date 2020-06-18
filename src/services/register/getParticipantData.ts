import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';

const build = (data: Participant): Participant => {
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
  const { data } = await pluginApi.get<Participant>(
    `participants/register?cpf=${cpf}`,
  );
  return build(data);
};

export const getParticipantByUpn = async (
  upn: string,
): Promise<Participant> => {
  const { data } = await pluginApi.get<Participant>(
    `participants/register?upn=${upn}`,
  );
  return build(data);
};
