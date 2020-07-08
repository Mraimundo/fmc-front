import { ApiErrors } from '@types';
import { TeamAwardsState } from './reducer';
import { Subsidiary, Role, ParticipantsList, ScoredParticipant } from './types';

export const errors: ApiErrors[] = [{ code: '1', message: 'internal error' }];

export const subsidiaries: Subsidiary[] = [
  { id: 1, label: 'Filial 1' },
  { id: 2, label: 'Filial 2' },
];

export const selectedSubsidiaries: number[] = [1, 2];

export const selectedRoles: number[] = [1, 2];

export const roles: Role[] = [
  { id: 1, identifier: 'gerente-comercial', name: 'Gerente Comercial' },
  { id: 2, identifier: 'supervisor', name: 'Supervisor' },
];

export const scoredParticipants: ScoredParticipant[] = [
  {
    id: 1,
    name: 'Gabriel',
    subsidiary: 'Unidade ABC',
    points: '200',
    picture: 'photo.jpg',
    role: roles[0],
  },
  {
    id: 2,
    name: 'Mayconn',
    subsidiary: 'Unidade DEF',
    points: '210',
    picture: 'photo.jpg',
    role: roles[1],
  },
  {
    id: 3,
    name: 'Centi',
    subsidiary: 'Unidade GHI',
    points: '21',
    picture: 'photo.jpg',
    role: roles[0],
  },
];

export const participants: ParticipantsList = {
  Supervisor: {
    total: 2,
    list: [
      {
        id: 1,
        name: 'Gabriel Ferreira',
        subsidiary: 'Unidade ABC',
        picture:
          'https://storage.vendavall.com.br/teste/avatars/1593900044.5f00fc0c6bc0c1.33183597.jpg',
      },
      {
        id: 2,
        name: 'Mayconn Oliveira',
        subsidiary: 'Unidade DEF',
        picture: null,
      },
    ],
  },
  'Gerente Comercial': {
    total: 1,
    list: [
      {
        id: 3,
        name: 'Centi',
        subsidiary: 'Unidade GHI',
        picture:
          'https://storage.vendavall.com.br/teste/avatars/1593899963.5f00fbbb16a4d5.55411308.jpg',
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
  subsidiaries,
  roles,
  participants,
  scoredParticipants,
  selectedSubsidiaries,
  selectedRoles,
  participantFinder: 'Gabriel',
  pointsToDistribute: '5000',
  distributeEqually: false,
};

export default state;
