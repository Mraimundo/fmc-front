import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';
import numbersOnly from 'util/numbersOnly';
import { formatPoints } from 'util/points';

const build = (data: Participant): Participant => {
  return {
    ...data,
    password: '',
    password_confirmation: '',
    education_level: '',
    regulations_accepted: [],
    harvest: {
      ...data.harvest,
      algodao: formatPoints(
        parseInt(numbersOnly(data.harvest?.algodao || '0') || '0', 0),
        0,
        0,
      ),
      arroz_irrigado: formatPoints(
        parseInt(numbersOnly(data.harvest?.arroz_irrigado || '0') || '0', 0),
        0,
        0,
      ),
      batata: formatPoints(
        parseInt(numbersOnly(data.harvest?.batata || '0') || '0', 0),
        0,
        0,
      ),
      cafe: formatPoints(
        parseInt(numbersOnly(data.harvest?.cafe || '0') || '0', 0),
        0,
        0,
      ),
      cana: formatPoints(
        parseInt(numbersOnly(data.harvest?.cana || '0') || '0', 0),
        0,
        0,
      ),
      cenoura: formatPoints(
        parseInt(numbersOnly(data.harvest?.cenoura || '0') || '0', 0),
        0,
        0,
      ),
      cevada: formatPoints(
        parseInt(numbersOnly(data.harvest?.cevada || '0') || '0', 0),
        0,
        0,
      ),
      citrus: formatPoints(
        parseInt(numbersOnly(data.harvest?.citrus || '0') || '0', 0),
        0,
        0,
      ),
      feijao: formatPoints(
        parseInt(numbersOnly(data.harvest?.feijao || '0') || '0', 0),
        0,
        0,
      ),
      mandioca: formatPoints(
        parseInt(numbersOnly(data.harvest?.mandioca || '0') || '0', 0),
        0,
        0,
      ),
      melao: formatPoints(
        parseInt(numbersOnly(data.harvest?.melao || '0') || '0', 0),
        0,
        0,
      ),
      milho: formatPoints(
        parseInt(numbersOnly(data.harvest?.milho || '0') || '0', 0),
        0,
        0,
      ),
      outras: formatPoints(
        parseInt(numbersOnly(data.harvest?.outras || '0') || '0', 0),
        0,
        0,
      ),
      soja: formatPoints(
        parseInt(numbersOnly(data.harvest?.soja || '0') || '0', 0),
        0,
        0,
      ),
      tabaco: formatPoints(
        parseInt(numbersOnly(data.harvest?.tabaco || '0') || '0', 0),
        0,
        0,
      ),
      tomate: formatPoints(
        parseInt(numbersOnly(data.harvest?.tomate || '0') || '0', 0),
        0,
        0,
      ),
      trigo: formatPoints(
        parseInt(numbersOnly(data.harvest?.trigo || '0') || '0', 0),
        0,
        0,
      ),
      uva: formatPoints(
        parseInt(numbersOnly(data.harvest?.uva || '0') || '0', 0),
        0,
        0,
      ),
    },
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
