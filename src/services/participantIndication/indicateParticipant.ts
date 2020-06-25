import { pluginApi } from 'services/api';
import numbersOnly from 'util/numbersOnly';
import ICreateParticipantIndicateDTO from './dtos/ICreateParticipantIndicateDTO';

export default async (
  participantData: ICreateParticipantIndicateDTO,
): Promise<void> => {
  await pluginApi.post('participants/indications/add', {
    ...participantData,
    cpf: numbersOnly(participantData.cpf),
    area_code: numbersOnly(participantData.area_code),
    cell_phone: numbersOnly(participantData.cell_phone),
  });
};
