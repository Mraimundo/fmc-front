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
  let extraSearch = '';
  if (roleId) {
    extraSearch += `?role_id=${roleId}`;
  }
  if (subsidiaryId) {
    extraSearch += `${
      roleId ? '&' : '?'
    }subsidiary_id=${subsidiaryId}&establishment_id=${establishmentId}`;
  }
  const { data } = await pluginApi.get<Response>(
    `participants/indications${extraSearch}`,
  );

  // Enqnto o endpoint não suporta que passe o parametro de order
  return data.indications.sort((item1, item2) =>
    item1.participant.status > item2.participant.status ? -1 : 1,
  );
};
