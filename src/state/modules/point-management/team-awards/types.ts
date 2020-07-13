import { FetchParticipantsRawData } from 'services/point-management/team-awards';

export type Subsidiary = {
  id: number;
  label: string;
};

export type Role = {
  id: number;
  identifier: string;
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
  points: string;
  assigned: boolean;
};

export type ParticipantsList = FetchParticipantsRawData;
