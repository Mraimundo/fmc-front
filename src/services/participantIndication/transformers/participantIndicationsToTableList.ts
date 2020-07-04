import { VENDAVALL_PARTICIPANT_STATUS } from 'config/constants';
import { formatDate } from 'util/datetime';
import { ParticipantIndication } from '../interfaces/ParticipantIndication';

export const status = (statusNumber: number): string => {
  return VENDAVALL_PARTICIPANT_STATUS(statusNumber);
};

export interface ParticipantIndicationTableData {
  id: number;
  participantId: number;
  name: string;
  profile: string;
  email: string;
  indicatedDate: string;
  status: string;
  personal: {
    id: number;
    status: number;
  };
}

export default (
  data: ParticipantIndication[],
): ParticipantIndicationTableData[] => {
  return data.map(item => ({
    id: item.id,
    participantId: item.participant.id,
    name: item.participant.name,
    profile: item.participant.profile,
    email: item.participant.email,
    indicatedDate: formatDate(item.created),
    status: status(item.participant.status),
    personal: {
      id: item.id,
      status: item.participant.status,
    },
  }));
};
