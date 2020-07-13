import { ApiErrors } from '@types';
import { TeamAwardsState } from './reducer';
import {
  Subsidiary,
  Role,
  Participant,
  ParticipantsList,
  ScoredParticipant,
} from './types';

export const errors: ApiErrors[] = [{ code: '1', message: 'internal error' }];

export const subsidiaries: Subsidiary[] = [
  { id: 1, label: 'Filial 1' },
  { id: 2, label: 'Filial 2' },
];

export const selectedSubsidiaries: number[] = [1, 2];

export const selectedRoles: number[] = [1, 2];

export const selectedParticipants: number[] | null = null;

export const roles: Role[] = [
  { id: 1, identifier: 'gerente-comercial', name: 'Gerente Comercial' },
  { id: 2, identifier: 'supervisor', name: 'Supervisor' },
];

export const participant: Participant = {
  id: 1,
  name: 'Gabriel',
  subsidiary: 'Unidade ABC',
  role: roles[0],
  picture:
    'https://storage.vendavall.com.br/teste/avatars/1593900044.5f00fc0c6bc0c1.33183597.jpg',
};

export const scoredParticipants: ScoredParticipant[] = [
  {
    ...participant,
    points: '200',
    assigned: true,
  },
  {
    id: 3,
    name: 'Centi',
    subsidiary: 'Unidade GHI',
    points: '21',
    picture: 'photo.jpg',
    role: roles[0],
    assigned: true,
  },
  {
    id: 2,
    name: 'Mayconn',
    subsidiary: 'Unidade DEF',
    points: '210',
    picture: 'photo.jpg',
    role: roles[1],
    assigned: true,
  },
];

export const participants: ParticipantsList = {
  'Gerente Comercial': {
    total: 2,
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
    total: 1,
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
    errors,
  },
  fetchRoles: {
    isFetching: false,
    errors: [],
  },
  fetchParticipants: {
    isFetching: false,
    errors: [],
  },
  assignPoints: {
    isFetching: false,
    errors: [],
  },
  subsidiaries,
  roles,
  participants,
  selectedParticipants,
  scoredParticipants,
  selectedSubsidiaries,
  selectedRoles,
  participantFinder: 'Gabriel',
  pointsToDistribute: '5000',
  distributeEqually: false,
  totalForEachParticipantDistributedEqually: 1666.6666666666667,
  selectedRolesAll: null,
};

export default state;
