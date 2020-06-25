import { VENDAVALL_PARTICIPANT_STATUS } from 'config/constants';

export const status = (statusNumber: number): string => {
  return VENDAVALL_PARTICIPANT_STATUS(statusNumber);
};
import { ParticipantIndication } from '../interfaces/ParticipantIndication';

export interface ParticipantIndicationTableData {
  id: number;
  participantId: number;
  name: string;
  profile: string;
  email: string;
  indicatedDate: string;
  status: string;
}

export default (data: ParticipantIndication[]): ParticipantIndicationTableData[] {
  data.map(item => ({
    id: item.id ,
    participantId: item.participant.id ,
    name: item.participant.name ,
    profile: item.participant.profile ,
    email: item.participant.email ,
    indicatedDate: item.created ,
    status: status(item.participant.status),
  }))
}
