import { FetchParticipantsRawData } from 'services/point-management/team-awards';

export type Subsidiary = {
  id: number;
  name: string;
};

export type Role = {
  id: number;
  name: string;
};

export type Participant = {
  id: number;
  name: string;
  picture?: string | null;
  subsidiary: string;
  role: Role;
};

export type ScoredParticipant = Participant & {
  points: number;
};

export type WaitingScoredParticipant = ScoredParticipant;

export type ParticipantsList = FetchParticipantsRawData;
