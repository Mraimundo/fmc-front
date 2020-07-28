import { TeamAwardsState } from './reducer';
import {
  Subsidiary,
  Role,
  Participant,
  ParticipantsList,
  ScoredParticipant,
  WaitingScoredParticipant,
} from './types';

export const error = 'Generic Error';

export const subsidiaries: Subsidiary[] = [
  { id: 1, name: 'Filial 1' },
  { id: 2, name: 'Filial 2' },
];

export const selectedSubsidiaries: number[] = [1, 2];

export const selectedRoles: number[] = [1, 2];

export const selectedParticipants: number[] | null = null;

export const roles: Role[] = [
  { id: 1, name: 'Gerente Comercial' },
  { id: 2, name: 'Supervisor' },
];

export const participant: Participant = {
  id: 1,
  name: 'Gabriel',
  subsidiary: 'Unidade ABC',
  role: roles[0],
  picture:
    'https://storage.vendavall.com.br/teste/avatars/1593900044.5f00fc0c6bc0c1.33183597.jpg',
};

export const waitingScoredParticipants: WaitingScoredParticipant[] | null = null;

export const scoredParticipants: ScoredParticipant[] = [
  {
    ...participant,
    points: 200,
  },
  {
    id: 2,
    name: 'Mayconn Oliveira',
    subsidiary: 'Unidade DEF',
    points: 210,
    picture: null,
    role: roles[1],
  },
  {
    id: 3,
    name: 'Centi',
    subsidiary: 'Unidade GHI',
    points: 21,
    picture: 'https://storage.vendavall.com.br/teste/avatars/1593899963.5f00fbbb16a4d5.55411308.jpg',
    role: roles[0],
  },
];

export const participants: ParticipantsList = {
  'Gerente Comercial': {
    count: 2,
    list: [
      {
        ...participant,
      },
      {
        id: 3,
        name: 'Centi',
        role: roles[0],
        subsidiary: 'Unidade GHI',
        picture:
          'https://storage.vendavall.com.br/teste/avatars/1593899963.5f00fbbb16a4d5.55411308.jpg',
      },
    ],
  },
  Supervisor: {
    count: 1,
    list: [
      {
        id: 2,
        name: 'Mayconn Oliveira',
        role: roles[1],
        subsidiary: 'Unidade DEF',
        picture: null,
      },
    ],
  },
};

const state: TeamAwardsState = {
  fetchSubsidiaries: {
    isFetching: false,
    error,
  },
  fetchRoles: {
    isFetching: false,
    error: '',
  },
  fetchParticipants: {
    isFetching: false,
    error: '',
  },
  assignPoints: {
    isFetching: false,
    error: '',
  },
  subsidiaries,
  roles,
  participants,
  selectedParticipants,
  waitingScoredParticipants,
  scoredParticipants,
  selectedSubsidiaries,
  selectedRoles,
  participantFinder: 'Gabriel',
  pointsToDistribute: 5000,
  distributeEqually: false,
  totalForEachParticipantDistributedEqually: 1666.6666666666667,
  selectedRolesAll: null,
  totalParticipants: 3,
  isOpenModalMissingParticipants: false,
};

export default state;
