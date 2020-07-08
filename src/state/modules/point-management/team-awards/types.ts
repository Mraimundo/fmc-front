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
};

export type ScoredParticipant = Participant & {
  role: Role;
  points?: string | null;
};

export type ParticipantsList = FetchParticipantsRawData;
