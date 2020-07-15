import { pluginApi } from 'services/api';
import { ParticipantIndication } from './interfaces/ParticipantIndication';

interface Response {
  indications: ParticipantIndication[];
}

interface Request {
  roleId?: number;
  subsidiaryId?: number;
  establishmentId: number;
}

export default async ({
  roleId,
  subsidiaryId,
  establishmentId,
}: Request): Promise<ParticipantIndication[]> => {
  let extraSearch = `?establishment_id=${establishmentId}`;
  if (roleId) {
    extraSearch += `&role_id=${roleId}`;
  }
  if (subsidiaryId) {
    extraSearch += `&subsidiary_id=${subsidiaryId}`;
  }
  const { data } = await pluginApi.get<Response>(
    `participants/indications${extraSearch}`,
  );

  // Enqnto o endpoint não suporta que passe o parametro de order
  return data.indications;
};
