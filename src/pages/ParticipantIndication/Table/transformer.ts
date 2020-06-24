import { ParticipantIndication } from 'services/participantIndication/interfaces/ParticipantIndication';

export interface TransformedData extends ParticipantIndication {
  formattedIndicatedDate: string;
}

export default (data: ParticipantIndication[]): TransformedData[] => {
  return data.map(item => ({
    ...item,
    formattedIndicatedDate: item.indicatedDate.toISOString(),
  }));
};
