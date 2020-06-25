import { pluginApi } from 'services/api';
import { ParticipantIndication } from './interfaces/ParticipantIndication';

interface Response {
  indications: ParticipantIndication[];
}

export default async (): Promise<ParticipantIndication[]> => {
  const { data } = await pluginApi.get<Response>('participants/indications');

  return data.indications;
};
