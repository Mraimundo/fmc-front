import {
  FetchSubsidiariesRawData,
  FetchParticipantsRawData,
  FetchParticipantsRawInfo,
} from 'services/point-management/team-awards';
import {
  Subsidiary,
  ParticipantsList,
} from 'state/modules/point-management/team-awards/types';

export const transformSubsidiariesRawData = (
  subsidiaries: FetchSubsidiariesRawData[],
): Subsidiary[] | null => {
  const subsidiariesResult = subsidiaries.map(({ id, name }) => ({ id, name }));

  return subsidiariesResult.length > 0 ? subsidiariesResult : null;
};

interface TransformParticipantsRawData {
  data: FetchParticipantsRawData;
  info: FetchParticipantsRawInfo;
}
export const transformParticipantsRawData = (
  response: TransformParticipantsRawData,
): {
  participants: ParticipantsList | null;
  totalParticipants: number;
} => {
  const participants =
    Object.values(response.data).length > 0 ? response.data : null;
  const totalParticipants = response.info.total_participants;

  return {
    participants,
    totalParticipants,
  };
};
