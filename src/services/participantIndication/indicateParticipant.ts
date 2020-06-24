import { pluginApi } from 'services/api';
import ICreateParticipantIndicateDTO from './dtos/ICreateParticipantIndicateDTO';

interface Response {
  message: string;
}

export default async (
  participantData: ICreateParticipantIndicateDTO,
): Promise<Response> => {
  const { data } = await pluginApi.post<Response>(
    'participants/indications/add',
    participantData,
  );
  console.log(data);

  return data;
};
